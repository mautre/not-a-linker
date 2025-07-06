// ==========================================
// ТИПЫ И ИНТЕРФЕЙСЫ
// ==========================================

interface FrameData {
  name: string;
  link: string;
}

interface Translations {
  selectFrames: string;
  selectFramesOrSections: string;
  linksCopied: string;
  copyErrorUseButton: string;
  readyToCopy: string;
  copyAndClose: string;
}

// ==========================================
// ЛОКАЛИЗАЦИЯ
// ==========================================

const TRANSLATIONS: Record<string, Translations> = {
  en: {
    selectFrames: 'Select one or more frames/sections',
    selectFramesOrSections: 'Select frames or sections',
    linksCopied: 'Links copied',
    copyErrorUseButton: 'Copy error. Use the button in the interface.',
    readyToCopy: 'Links ready to copy:',
    copyAndClose: 'Copy and Close'
  },
  ru: {
    selectFrames: 'Выберите один или несколько фреймов/секций',
    selectFramesOrSections: 'Выберите фреймы или секции',
    linksCopied: 'Ссылки скопированы',
    copyErrorUseButton: 'Ошибка копирования. Используйте кнопку в интерфейсе.',
    readyToCopy: 'Ссылки готовы к копированию:',
    copyAndClose: 'Скопировать и закрыть'
  },
  de: {
    selectFrames: 'Wählen Sie einen oder mehrere Frames/Bereiche aus',
    selectFramesOrSections: 'Frames oder Bereiche auswählen',
    linksCopied: 'Links kopiert',
    copyErrorUseButton: 'Kopierfehler. Verwenden Sie die Schaltfläche in der Oberfläche.',
    readyToCopy: 'Links zum Kopieren bereit:',
    copyAndClose: 'Kopieren und schließen'
  },
  fr: {
    selectFrames: 'Sélectionnez un ou plusieurs cadres/sections',
    selectFramesOrSections: 'Sélectionner des cadres ou des sections',
    linksCopied: 'Liens copiés',
    copyErrorUseButton: 'Erreur de copie. Utilisez le bouton dans l\'interface.',
    readyToCopy: 'Liens prêts à copier :',
    copyAndClose: 'Copier et fermer'
  },
  es: {
    selectFrames: 'Seleccione uno o más marcos/secciones',
    selectFramesOrSections: 'Seleccionar marcos o secciones',
    linksCopied: 'Enlaces copiados',
    copyErrorUseButton: 'Error de copia. Use el botón en la interfaz.',
    readyToCopy: 'Enlaces listos para copiar:',
    copyAndClose: 'Copiar y cerrar'
  },
  pt: {
    selectFrames: 'Selecione um ou mais quadros/seções',
    selectFramesOrSections: 'Selecionar quadros ou seções',
    linksCopied: 'Links copiados',
    copyErrorUseButton: 'Erro de cópia. Use o botão na interface.',
    readyToCopy: 'Links prontos para copiar:',
    copyAndClose: 'Copiar e fechar'
  },
  ja: {
    selectFrames: '1つまたは複数のフレーム/セクションを選択してください',
    selectFramesOrSections: 'フレームまたはセクションを選択',
    linksCopied: 'リンクがコピーされました',
    copyErrorUseButton: 'コピーエラー。インターフェースのボタンを使用してください。',
    readyToCopy: 'コピー準備完了:',
    copyAndClose: 'コピーして閉じる'
  },
  ko: {
    selectFrames: '하나 이상의 프레임/섹션을 선택하세요',
    selectFramesOrSections: '프레임 또는 섹션 선택',
    linksCopied: '링크가 복사되었습니다',
    copyErrorUseButton: '복사 오류. 인터페이스의 버튼을 사용하세요.',
    readyToCopy: '복사 준비 완료:',
    copyAndClose: '복사 후 닫기'
  },
  'zh-cn': {
    selectFrames: '选择一个或多个框架/部分',
    selectFramesOrSections: '选择框架或部分',
    linksCopied: '链接已复制',
    copyErrorUseButton: '复制错误。请使用界面中的按钮。',
    readyToCopy: '链接准备复制：',
    copyAndClose: '复制并关闭'
  }
};

// ==========================================
// ОСНОВНАЯ ЛОГИКА
// ==========================================

let currentTranslations: Translations = TRANSLATIONS.en;

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

function copyFrameLinks(): void {
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
  
  figma.ui.postMessage({
    type: 'copy-to-clipboard',
    data: frameData,
    translations: currentTranslations
  });
}

function isFrameOrSection(node: SceneNode): node is FrameNode | SectionNode {
  return node.type === 'FRAME' || node.type === 'SECTION';
}

function createFrameData(frame: FrameNode | SectionNode): FrameData {
  return {
    name: frame.name,
    link: generateFrameLink(frame)
  };
}

function generateFrameLink(node: FrameNode | SectionNode): string {
  const fileKey = figma.fileKey;
  
  if (!fileKey) {
    console.warn('figma.fileKey is undefined. Make sure enablePrivatePluginApi is enabled in manifest.json');
    // Fallback: попытаемся получить из URL или использовать placeholder
    return `https://www.figma.com/file/[FILE_KEY]?node-id=${encodeURIComponent(node.id)}`;
  }
  
  return `https://www.figma.com/file/${fileKey}?node-id=${encodeURIComponent(node.id)}`;
} 