"use strict";
// ==========================================
// ТИПЫ И ИНТЕРФЕЙСЫ
// ==========================================
// ==========================================
// ЛОКАЛИЗАЦИЯ
// ==========================================
const TRANSLATIONS = {
    en: {
        selectFrames: 'Select one or more frames/sections',
        selectFramesOrSections: 'Select frames or sections',
        linksCopied: 'Links copied',
        copyErrorUseButton: 'Copy error. Use the button in the interface.',
        readyToCopy: 'Links ready to copy:',
        copyAndClose: 'Copy and Close',
        fileKeyNeeded: 'File key needed for links. Please copy the file URL from your browser.',
        copyFileUrl: 'Copy file URL from browser address bar'
    },
    ru: {
        selectFrames: 'Выберите один или несколько фреймов/секций',
        selectFramesOrSections: 'Выберите фреймы или секции',
        linksCopied: 'Ссылки скопированы',
        copyErrorUseButton: 'Ошибка копирования. Используйте кнопку в интерфейсе.',
        readyToCopy: 'Ссылки готовы к копированию:',
        copyAndClose: 'Скопировать и закрыть',
        fileKeyNeeded: 'Для ссылок нужен ключ файла. Скопируйте URL файла из браузера.',
        copyFileUrl: 'Скопируйте URL файла из адресной строки браузера'
    },
    de: {
        selectFrames: 'Wählen Sie einen oder mehrere Frames/Bereiche aus',
        selectFramesOrSections: 'Frames oder Bereiche auswählen',
        linksCopied: 'Links kopiert',
        copyErrorUseButton: 'Kopierfehler. Verwenden Sie die Schaltfläche in der Oberfläche.',
        readyToCopy: 'Links zum Kopieren bereit:',
        copyAndClose: 'Kopieren und schließen',
        fileKeyNeeded: 'Dateischlüssel für Links benötigt. Kopieren Sie die Datei-URL aus dem Browser.',
        copyFileUrl: 'Datei-URL aus Browser-Adressleiste kopieren'
    },
    fr: {
        selectFrames: 'Sélectionnez un ou plusieurs cadres/sections',
        selectFramesOrSections: 'Sélectionner des cadres ou des sections',
        linksCopied: 'Liens copiés',
        copyErrorUseButton: 'Erreur de copie. Utilisez le bouton dans l\'interface.',
        readyToCopy: 'Liens prêts à copier :',
        copyAndClose: 'Copier et fermer',
        fileKeyNeeded: 'Clé de fichier nécessaire pour les liens. Copiez l\'URL du fichier depuis le navigateur.',
        copyFileUrl: 'Copiez l\'URL du fichier depuis la barre d\'adresse du navigateur'
    },
    es: {
        selectFrames: 'Seleccione uno o más marcos/secciones',
        selectFramesOrSections: 'Seleccionar marcos o secciones',
        linksCopied: 'Enlaces copiados',
        copyErrorUseButton: 'Error de copia. Use el botón en la interfaz.',
        readyToCopy: 'Enlaces listos para copiar:',
        copyAndClose: 'Copiar y cerrar',
        fileKeyNeeded: 'Se necesita clave de archivo para enlaces. Copie la URL del archivo desde el navegador.',
        copyFileUrl: 'Copie la URL del archivo desde la barra de direcciones del navegador'
    },
    pt: {
        selectFrames: 'Selecione um ou mais quadros/seções',
        selectFramesOrSections: 'Selecionar quadros ou seções',
        linksCopied: 'Links copiados',
        copyErrorUseButton: 'Erro de cópia. Use o botão na interface.',
        readyToCopy: 'Links prontos para copiar:',
        copyAndClose: 'Copiar e fechar',
        fileKeyNeeded: 'Chave de arquivo necessária para links. Copie a URL do arquivo do navegador.',
        copyFileUrl: 'Copie a URL do arquivo da barra de endereços do navegador'
    },
    ja: {
        selectFrames: '1つまたは複数のフレーム/セクションを選択してください',
        selectFramesOrSections: 'フレームまたはセクションを選択',
        linksCopied: 'リンクがコピーされました',
        copyErrorUseButton: 'コピーエラー。インターフェースのボタンを使用してください。',
        readyToCopy: 'コピー準備完了:',
        copyAndClose: 'コピーして閉じる',
        fileKeyNeeded: 'リンクにはファイルキーが必要です。ブラウザからファイルURLをコピーしてください。',
        copyFileUrl: 'ブラウザのアドレスバーからファイルURLをコピー'
    },
    ko: {
        selectFrames: '하나 이상의 프레임/섹션을 선택하세요',
        selectFramesOrSections: '프레임 또는 섹션 선택',
        linksCopied: '링크가 복사되었습니다',
        copyErrorUseButton: '복사 오류. 인터페이스의 버튼을 사용하세요.',
        readyToCopy: '복사 준비 완료:',
        copyAndClose: '복사 후 닫기',
        fileKeyNeeded: '링크에 파일 키가 필요합니다. 브라우저에서 파일 URL을 복사하세요.',
        copyFileUrl: '브라우저 주소 표시줄에서 파일 URL 복사'
    },
    'zh-cn': {
        selectFrames: '选择一个或多个框架/部分',
        selectFramesOrSections: '选择框架或部分',
        linksCopied: '链接已复制',
        copyErrorUseButton: '复制错误。请使用界面中的按钮。',
        readyToCopy: '链接准备复制：',
        copyAndClose: '复制并关闭',
        fileKeyNeeded: '链接需要文件密钥。请从浏览器复制文件URL。',
        copyFileUrl: '从浏览器地址栏复制文件URL'
    }
};
// ==========================================
// ОСНОВНАЯ ЛОГИКА
// ==========================================
let currentTranslations = TRANSLATIONS.en;
figma.showUI(__html__, { width: 300, height: 200 });
figma.ui.onmessage = (msg) => {
    switch (msg.type) {
        case 'ui-ready':
            if (msg.language && TRANSLATIONS[msg.language]) {
                currentTranslations = TRANSLATIONS[msg.language];
            }
            copyFrameLinks();
            break;
        case 'copied':
            figma.notify(currentTranslations.linksCopied);
            figma.closePlugin();
            break;
        case 'error':
            figma.notify(currentTranslations.copyErrorUseButton);
            break;
    }
};
// ==========================================
// УТИЛИТЫ
// ==========================================
function copyFrameLinks() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
        figma.notify(currentTranslations.selectFrames);
        figma.closePlugin();
        return;
    }
    const frames = selection.filter(isFrameOrSection);
    if (frames.length === 0) {
        figma.notify(currentTranslations.selectFramesOrSections);
        figma.closePlugin();
        return;
    }
    const frameData = frames.map(createFrameData);
    // Проверяем, есть ли доступ к fileKey
    const needsFileKey = !figma.fileKey;
    figma.ui.postMessage({
        type: 'copy-to-clipboard',
        data: frameData,
        translations: currentTranslations,
        needsFileKey: needsFileKey
    });
}
function isFrameOrSection(node) {
    return node.type === 'FRAME' || node.type === 'SECTION';
}
function createFrameData(frame) {
    return {
        name: frame.name,
        link: generateFrameLink(frame)
    };
}
function generateFrameLink(node) {
    const fileKey = figma.fileKey;
    if (!fileKey) {
        // Для опубликованных плагинов figma.fileKey недоступен
        // Показываем инструкцию пользователю
        return `${currentTranslations.copyFileUrl}\nhttps://www.figma.com/file/[PASTE_FILE_KEY_HERE]?node-id=${encodeURIComponent(node.id)}`;
    }
    return `https://www.figma.com/file/${fileKey}?node-id=${encodeURIComponent(node.id)}`;
}
