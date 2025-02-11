/*
 * ESLint 公式ドキュメント
 * https://eslint.org/
 */

// .eslintrc.cjs
module.exports = {
  // 意図せず設定ファイル遡らない様にする
  root: true,
  // モジュールを読み込み。これだけでもOK。
  extends: ['@nuxt/eslint-config'],

  // 以下ルールは、オススメの設定
  rules: {
    /**
     * prettierとeslintの競合回避
     */
    // 行の最大長ルールを無効化(prettierに任せる)
    'max-len': 'off',
    // 一行時の属性値数チェックを無効化(prettierに任せる)
    'vue/max-attributes-per-line': 'off',
    // インデントルールを無効化(prettierに任せる)
    'vue/html-indent': 'off',
    // マルチライン時のインデントルールを無効化(prettierに任せる)
    'vue/multiline-html-element-content-newline': 'off',
    // タグの閉じ括弧の前に改行設定を無効化(prettierに任せる)
    'vue/html-closing-bracket-newline': 'off',
    // 単一行要素の内容の前後に改行設定を無効化(prettierに任せる)
    'vue/singleline-html-element-content-newline': 'off',
    // 複数行の時に末尾のカンマを許容
    'comma-dangle': ['error', 'only-multiline'],

    /**
     * 好みの設定
     */
    // imgのセルフクローズを矯正
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    // 不要な変数に対して警告を出す（_から始まるものは許容）
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // 引数
        varsIgnorePattern: '^_', // 変数
        caughtErrorsIgnorePattern: '^_', // errorハンドリング
        destructuredArrayIgnorePattern: '^_', // 配列内の変数参照
      },
    ],
    // コンポーネント名のマルチワード警告を無効化
    'vue/multi-word-component-names': 'off',
  },
}
