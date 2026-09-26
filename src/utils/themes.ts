import * as monaco from 'monaco-editor';

export const nightOwlTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '637777', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'c792ea' },
        { token: 'operator', foreground: '89ddff' },
        { token: 'string', foreground: 'ecc48d' },
        { token: 'number', foreground: 'f78c6c' },
        { token: 'variable', foreground: 'd6deeb' },
    ],
    colors: {
        'editor.background': '#011627',
        'editor.foreground': '#d6deeb',
        'editorCursor.foreground': '#80a4c2',
        'editor.lineHighlightBackground': '#010e17',
        'editorLineNumber.foreground': '#4b6479',
        'editor.selectionBackground': '#1d3b53',
        'editorIndentGuide.background': '#4b6479',
    }
};

export const draculaTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ff79c6' },
        { token: 'operator', foreground: 'ff79c6' },
        { token: 'string', foreground: 'f1fa8c' },
        { token: 'number', foreground: 'bd93f9' },
        { token: 'variable', foreground: 'f8f8f2' },
    ],
    colors: {
        'editor.background': '#282a36',
        'editor.foreground': '#f8f8f2',
        'editorCursor.foreground': '#f8f8f0',
        'editor.lineHighlightBackground': '#44475a',
        'editorLineNumber.foreground': '#6272a4',
        'editor.selectionBackground': '#44475a',
        'editorIndentGuide.background': '#44475a',
    }
};

export const githubDarkTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '6e7681', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ff7b72' },
        { token: 'operator', foreground: '79c0ff' },
        { token: 'string', foreground: 'a5d6ff' },
        { token: 'number', foreground: '79c0ff' },
        { token: 'variable', foreground: 'e6edf3' },
    ],
    colors: {
        'editor.background': '#0d1117',
        'editor.foreground': '#e6edf3',
        'editorCursor.foreground': '#f85149',
        'editor.lineHighlightBackground': '#161b22',
        'editorLineNumber.foreground': '#6e7681',
        'editor.selectionBackground': '#264f78',
        'editorIndentGuide.background': '#21262d',
    }
};

export const monokaiTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '75715e', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'f92672' },
        { token: 'operator', foreground: 'f92672' },
        { token: 'string', foreground: 'e6db74' },
        { token: 'number', foreground: 'ae81ff' },
        { token: 'variable', foreground: 'f8f8f2' },
    ],
    colors: {
        'editor.background': '#272822',
        'editor.foreground': '#f8f8f2',
        'editorCursor.foreground': '#f8f8f0',
        'editor.lineHighlightBackground': '#3e3d32',
        'editorLineNumber.foreground': '#75715e',
        'editor.selectionBackground': '#49483e',
        'editorIndentGuide.background': '#49483e',
    }
};

export const oneDarkTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '5c6370', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'c678dd' },
        { token: 'operator', foreground: '56b6c2' },
        { token: 'string', foreground: '98c379' },
        { token: 'number', foreground: 'd19a66' },
        { token: 'variable', foreground: 'e06c75' },
    ],
    colors: {
        'editor.background': '#282c34',
        'editor.foreground': '#abb2bf',
        'editorCursor.foreground': '#528bff',
        'editor.lineHighlightBackground': '#2c313c',
        'editorLineNumber.foreground': '#5c6370',
        'editor.selectionBackground': '#3e4451',
        'editorIndentGuide.background': '#3e4451',
    }
};

export const solarizedDarkTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '586e75', fontStyle: 'italic' },
        { token: 'keyword', foreground: '859900' },
        { token: 'operator', foreground: '93a1a1' },
        { token: 'string', foreground: '2aa198' },
        { token: 'number', foreground: 'd33682' },
        { token: 'variable', foreground: '839496' },
    ],
    colors: {
        'editor.background': '#002b36',
        'editor.foreground': '#839496',
        'editorCursor.foreground': '#d30102',
        'editor.lineHighlightBackground': '#073642',
        'editorLineNumber.foreground': '#586e75',
        'editor.selectionBackground': '#073642',
        'editorIndentGuide.background': '#073642',
    }
};

export const githubLightTheme: monaco.editor.IStandaloneThemeData = {
    base: 'vs',
    inherit: true,
    rules: [
        { token: 'comment', foreground: '6e7781', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'cf222e' },
        { token: 'operator', foreground: '0550ae' },
        { token: 'string', foreground: '0a3069' },
        { token: 'number', foreground: '0550ae' },
        { token: 'variable', foreground: '24292f' },
    ],
    colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#1f2328',
        'editorCursor.foreground': '#0a69da',
        'editor.lineHighlightBackground': '#f6f8fa',
        'editorLineNumber.foreground': '#6e7781',
        'editor.selectionBackground': '#add6ff',
        'editorIndentGuide.background': '#d0d7de',
    }
};

export const codeArenaThemes = [
    { name: 'GitHub Light', value: 'github-light', config: githubLightTheme },
    { name: 'GitHub Dark', value: 'github-dark', config: githubDarkTheme }
];
