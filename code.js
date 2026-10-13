"use strict";
// ==========================================
// ТИПЫ И КОНСТАНТЫ
// ==========================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const FORMATS = ['links', 'text', 'markdown'];
const SUPPORTED_TYPES = new Set([
    'FRAME',
    'SECTION',
    'COMPONENT',
    'COMPONENT_SET',
    'INSTANCE',
    'GROUP'
]);
// Ключ файла хранится в самом документе — его видят все, кто открывает файл
const PLUGIN_DATA = {
    NAMESPACE: 'notalinker',
    FILE_KEY: 'fileKey',
    FILE_NAME: 'fileName'
};
const CLIENT_STORAGE = {
    FORMAT: 'format'
};
const SIZE = {
    WIDTH: 320,
    LINKS_HEIGHT: 280,
    ASK_HEIGHT: 220
};
// ==========================================
// ЛОКАЛИЗАЦИЯ
// ==========================================
const TRANSLATIONS = {
    en: {
        selectNodes: 'Select frames, sections, components or groups',
        copied: 'Links copied: {count}',
        skipped: 'skipped: {count}',
        fileLinkSaved: 'File link saved',
        fileLinkNotSaved: 'Could not save the file link to the document. It will be asked again next time.',
        copyFailed: 'Copy failed. Use the buttons in the window.',
        formatLinks: 'Links',
        formatText: 'Text',
        formatMarkdown: 'Markdown',
        hintLinks: 'Clickable names: Telegram, Notes, Docs',
        hintText: 'Name and URL: works anywhere',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: 'Paste a link to this file',
        askHint: 'Share → Copy link, or the URL from the browser. Asked once per file and saved in it for the whole team.',
        askChanged: 'The file was renamed or duplicated. Check that the link points to this file.',
        invalidLink: 'This does not look like a Figma file link',
        save: 'Save'
    },
    ru: {
        selectNodes: 'Выберите фреймы, секции, компоненты или группы',
        copied: 'Ссылки скопированы: {count}',
        skipped: 'пропущено: {count}',
        fileLinkSaved: 'Ссылка на файл сохранена',
        fileLinkNotSaved: 'Не удалось сохранить ссылку в документ. В следующий раз она будет запрошена снова.',
        copyFailed: 'Не удалось скопировать. Используйте кнопки в окне.',
        formatLinks: 'Ссылки',
        formatText: 'Текст',
        formatMarkdown: 'Markdown',
        hintLinks: 'Кликабельные названия: Telegram, Заметки, Docs',
        hintText: 'Название и URL: работает везде',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: 'Вставьте ссылку на этот файл',
        askHint: 'Share → Copy link или адрес из браузера. Запрашивается один раз и сохраняется в файле для всей команды.',
        askChanged: 'Файл переименован или продублирован. Проверьте, что ссылка ведёт на этот файл.',
        invalidLink: 'Не похоже на ссылку на файл Figma',
        save: 'Сохранить'
    },
    de: {
        selectNodes: 'Wählen Sie Frames, Bereiche, Komponenten oder Gruppen aus',
        copied: 'Links kopiert: {count}',
        skipped: 'übersprungen: {count}',
        fileLinkSaved: 'Dateilink gespeichert',
        fileLinkNotSaved: 'Der Dateilink konnte nicht im Dokument gespeichert werden. Er wird beim nächsten Mal erneut abgefragt.',
        copyFailed: 'Kopieren fehlgeschlagen. Verwenden Sie die Schaltflächen im Fenster.',
        formatLinks: 'Links',
        formatText: 'Text',
        formatMarkdown: 'Markdown',
        hintLinks: 'Klickbare Namen: Telegram, Notizen, Docs',
        hintText: 'Name und URL: funktioniert überall',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: 'Link zu dieser Datei einfügen',
        askHint: 'Share → Copy link oder die URL aus dem Browser. Wird einmal pro Datei abgefragt und für das ganze Team darin gespeichert.',
        askChanged: 'Die Datei wurde umbenannt oder dupliziert. Prüfen Sie, ob der Link auf diese Datei verweist.',
        invalidLink: 'Das sieht nicht wie ein Figma-Dateilink aus',
        save: 'Speichern'
    },
    fr: {
        selectNodes: 'Sélectionnez des cadres, sections, composants ou groupes',
        copied: 'Liens copiés : {count}',
        skipped: 'ignorés : {count}',
        fileLinkSaved: 'Lien du fichier enregistré',
        fileLinkNotSaved: 'Impossible d\'enregistrer le lien dans le document. Il sera redemandé la prochaine fois.',
        copyFailed: 'Échec de la copie. Utilisez les boutons de la fenêtre.',
        formatLinks: 'Liens',
        formatText: 'Texte',
        formatMarkdown: 'Markdown',
        hintLinks: 'Noms cliquables : Telegram, Notes, Docs',
        hintText: 'Nom et URL : fonctionne partout',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: 'Collez le lien de ce fichier',
        askHint: 'Share → Copy link, ou l\'URL du navigateur. Demandé une fois par fichier et enregistré dedans pour toute l\'équipe.',
        askChanged: 'Le fichier a été renommé ou dupliqué. Vérifiez que le lien pointe vers ce fichier.',
        invalidLink: 'Cela ne ressemble pas à un lien de fichier Figma',
        save: 'Enregistrer'
    },
    es: {
        selectNodes: 'Seleccione marcos, secciones, componentes o grupos',
        copied: 'Enlaces copiados: {count}',
        skipped: 'omitidos: {count}',
        fileLinkSaved: 'Enlace del archivo guardado',
        fileLinkNotSaved: 'No se pudo guardar el enlace en el documento. Se volverá a pedir la próxima vez.',
        copyFailed: 'Error al copiar. Use los botones de la ventana.',
        formatLinks: 'Enlaces',
        formatText: 'Texto',
        formatMarkdown: 'Markdown',
        hintLinks: 'Nombres clicables: Telegram, Notas, Docs',
        hintText: 'Nombre y URL: funciona en cualquier sitio',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: 'Pegue el enlace de este archivo',
        askHint: 'Share → Copy link, o la URL del navegador. Se pide una vez por archivo y se guarda en él para todo el equipo.',
        askChanged: 'El archivo se renombró o duplicó. Compruebe que el enlace apunta a este archivo.',
        invalidLink: 'No parece un enlace de archivo de Figma',
        save: 'Guardar'
    },
    pt: {
        selectNodes: 'Selecione quadros, seções, componentes ou grupos',
        copied: 'Links copiados: {count}',
        skipped: 'ignorados: {count}',
        fileLinkSaved: 'Link do arquivo salvo',
        fileLinkNotSaved: 'Não foi possível salvar o link no documento. Ele será solicitado novamente.',
        copyFailed: 'Falha ao copiar. Use os botões da janela.',
        formatLinks: 'Links',
        formatText: 'Texto',
        formatMarkdown: 'Markdown',
        hintLinks: 'Nomes clicáveis: Telegram, Notas, Docs',
        hintText: 'Nome e URL: funciona em qualquer lugar',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: 'Cole o link deste arquivo',
        askHint: 'Share → Copy link, ou a URL do navegador. Pedido uma vez por arquivo e salvo nele para toda a equipe.',
        askChanged: 'O arquivo foi renomeado ou duplicado. Verifique se o link aponta para este arquivo.',
        invalidLink: 'Isso não parece um link de arquivo do Figma',
        save: 'Salvar'
    },
    ja: {
        selectNodes: 'フレーム、セクション、コンポーネント、またはグループを選択してください',
        copied: 'リンクをコピーしました: {count}',
        skipped: 'スキップ: {count}',
        fileLinkSaved: 'ファイルリンクを保存しました',
        fileLinkNotSaved: 'ファイルリンクをドキュメントに保存できませんでした。次回もう一度入力を求められます。',
        copyFailed: 'コピーに失敗しました。ウィンドウのボタンを使用してください。',
        formatLinks: 'リンク',
        formatText: 'テキスト',
        formatMarkdown: 'Markdown',
        hintLinks: 'クリック可能な名前: Telegram、メモ、Docs',
        hintText: '名前とURL: どこでも使えます',
        hintMarkdown: 'GitHub、Notion、Obsidian',
        askTitle: 'このファイルのリンクを貼り付けてください',
        askHint: 'Share → Copy link、またはブラウザのURL。ファイルごとに一度だけ入力し、チーム全員のためにファイルに保存されます。',
        askChanged: 'ファイル名が変更されたか、複製されました。リンクがこのファイルを指しているか確認してください。',
        invalidLink: 'Figmaのファイルリンクではないようです',
        save: '保存'
    },
    ko: {
        selectNodes: '프레임, 섹션, 컴포넌트 또는 그룹을 선택하세요',
        copied: '링크 복사됨: {count}',
        skipped: '건너뜀: {count}',
        fileLinkSaved: '파일 링크가 저장되었습니다',
        fileLinkNotSaved: '파일 링크를 문서에 저장하지 못했습니다. 다음에 다시 요청됩니다.',
        copyFailed: '복사에 실패했습니다. 창의 버튼을 사용하세요.',
        formatLinks: '링크',
        formatText: '텍스트',
        formatMarkdown: 'Markdown',
        hintLinks: '클릭 가능한 이름: Telegram, 메모, Docs',
        hintText: '이름과 URL: 어디서나 사용 가능',
        hintMarkdown: 'GitHub, Notion, Obsidian',
        askTitle: '이 파일의 링크를 붙여넣으세요',
        askHint: 'Share → Copy link 또는 브라우저의 URL. 파일마다 한 번만 묻고 팀 전체를 위해 파일에 저장됩니다.',
        askChanged: '파일 이름이 바뀌었거나 복제되었습니다. 링크가 이 파일을 가리키는지 확인하세요.',
        invalidLink: 'Figma 파일 링크가 아닌 것 같습니다',
        save: '저장'
    },
    'zh-cn': {
        selectNodes: '请选择框架、分区、组件或分组',
        copied: '已复制链接：{count}',
        skipped: '已跳过：{count}',
        fileLinkSaved: '文件链接已保存',
        fileLinkNotSaved: '无法将文件链接保存到文档中，下次将再次询问。',
        copyFailed: '复制失败，请使用窗口中的按钮。',
        formatLinks: '链接',
        formatText: '文本',
        formatMarkdown: 'Markdown',
        hintLinks: '可点击的名称：Telegram、备忘录、Docs',
        hintText: '名称和 URL：适用于任何地方',
        hintMarkdown: 'GitHub、Notion、Obsidian',
        askTitle: '粘贴此文件的链接',
        askHint: 'Share → Copy link，或浏览器中的网址。每个文件只需输入一次，并保存在文件中供整个团队使用。',
        askChanged: '文件已被重命名或复制。请确认链接指向此文件。',
        invalidLink: '这看起来不像 Figma 文件链接',
        save: '保存'
    }
};
// ==========================================
// ОСНОВНАЯ ЛОГИКА
// ==========================================
let command = 'open';
let t = TRANSLATIONS.en;
let fileKey = '';
// Варианты по Tab в Quick actions; названия на английском — манифест не локализуется
const QUICK_COMMANDS = [
    { name: 'Links', data: 'links' },
    { name: 'Text', data: 'text' },
    { name: 'Markdown', data: 'markdown' },
    { name: 'Change file link…', data: 'file-link' }
];
figma.parameters.on('input', ({ key, query, result }) => {
    if (key !== 'format')
        return;
    const search = query.trim().toLowerCase();
    result.setSuggestions(QUICK_COMMANDS.filter(item => item.name.toLowerCase().includes(search)));
});
// Клик / Enter — окно с выбором формата; Tab — конкретный вариант
figma.on('run', ({ parameters }) => {
    command = parseCommand(parameters && parameters.format);
    // Окно скрыто, пока не понятно, нужно ли оно
    figma.showUI(__html__, { width: SIZE.WIDTH, height: SIZE.LINKS_HEIGHT, visible: false, themeColors: true });
    figma.ui.onmessage = handleMessage;
});
function handleMessage(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (msg.type) {
            case 'ui-ready':
                t = TRANSLATIONS[msg.language] || TRANSLATIONS.en;
                yield start();
                break;
            case 'save-file-key':
                fileKey = msg.fileKey;
                if (!saveFileKey(fileKey))
                    figma.notify(t.fileLinkNotSaved);
                if (command === 'file-link') {
                    figma.closePlugin(t.fileLinkSaved);
                    return;
                }
                yield proceed();
                break;
            case 'copied':
                yield figma.clientStorage.setAsync(CLIENT_STORAGE.FORMAT, msg.format);
                figma.closePlugin(copiedMessage());
                break;
            case 'copy-failed':
                figma.notify(t.copyFailed);
                yield showLinks();
                break;
        }
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        if (command !== 'file-link' && getSelection().items.length === 0) {
            figma.closePlugin(t.selectNodes);
            return;
        }
        const state = readFileKey();
        fileKey = state.fileKey;
        if (command === 'file-link')
            return askFileKey('manual');
        if (!fileKey)
            return askFileKey('missing');
        if (state.changed)
            return askFileKey('changed');
        yield proceed();
    });
}
function proceed() {
    return __awaiter(this, void 0, void 0, function* () {
        if (command === 'open' || command === 'file-link')
            return showLinks();
        // Быстрая команда: копируем через скрытое окно, при ошибке показываем его
        figma.ui.postMessage({
            type: 'copy-now',
            format: command,
            items: getSelection().items,
            t
        });
    });
}
function showLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const saved = yield figma.clientStorage.getAsync(CLIENT_STORAGE.FORMAT);
        const format = command !== 'open' && isFormat(command) ? command : isFormat(saved) ? saved : 'links';
        figma.ui.resize(SIZE.WIDTH, SIZE.LINKS_HEIGHT);
        figma.ui.postMessage({ type: 'show-links', format, items: getSelection().items, t });
        figma.ui.show();
    });
}
function askFileKey(reason) {
    figma.ui.resize(SIZE.WIDTH, SIZE.ASK_HEIGHT);
    figma.ui.postMessage({ type: 'ask-file-key', reason, fileKey, t });
    figma.ui.show();
}
// ==========================================
// КЛЮЧ ФАЙЛА
// ==========================================
// figma.fileKey доступен только приватным плагинам, остальным — сохранённый ключ
function readFileKey() {
    if (figma.fileKey)
        return { fileKey: figma.fileKey, changed: false };
    const stored = figma.root.getSharedPluginData(PLUGIN_DATA.NAMESPACE, PLUGIN_DATA.FILE_KEY);
    const storedName = figma.root.getSharedPluginData(PLUGIN_DATA.NAMESPACE, PLUGIN_DATA.FILE_NAME);
    // При дублировании файла plugin data копируется — имя помогает это заметить
    return { fileKey: stored, changed: Boolean(stored) && storedName !== figma.root.name };
}
function saveFileKey(key) {
    try {
        figma.root.setSharedPluginData(PLUGIN_DATA.NAMESPACE, PLUGIN_DATA.FILE_KEY, key);
        figma.root.setSharedPluginData(PLUGIN_DATA.NAMESPACE, PLUGIN_DATA.FILE_NAME, figma.root.name);
        return true;
    }
    catch (_error) {
        // Например, файл открыт только для просмотра
        return false;
    }
}
// ==========================================
// УТИЛИТЫ
// ==========================================
function getSelection() {
    const selection = figma.currentPage.selection;
    const nodes = selection.filter(node => SUPPORTED_TYPES.has(node.type));
    return {
        items: nodes.map(node => ({ name: node.name, link: createNodeLink(node) })),
        skipped: selection.length - nodes.length
    };
}
function createNodeLink(node) {
    const slug = encodeURIComponent(figma.root.name.trim().replace(/\s+/g, '-')) || 'file';
    return `https://www.figma.com/design/${fileKey}/${slug}?node-id=${encodeURIComponent(node.id.replace(/:/g, '-'))}`;
}
function copiedMessage() {
    const { items, skipped } = getSelection();
    const message = format(t.copied, items.length);
    return skipped ? `${message} · ${format(t.skipped, skipped)}` : message;
}
function format(template, count) {
    return template.replace('{count}', String(count));
}
function isFormat(value) {
    return FORMATS.includes(value);
}
function parseCommand(value) {
    if (value === 'file-link' || isFormat(value))
        return value;
    return 'open';
}
