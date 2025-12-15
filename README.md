# WebdriverIO + Cucumber Boilerplate (Laravel dev 環境向け)

このリポジトリはテンプレートです。各プロジェクトのテスト用リポジトリにインポートして使用してください。ベースURLは dev 環境を想定し、環境変数で切り替えます。

## セットアップ
1. 依存関係インストール: `npm install`
2. 環境変数: `.env` を作成し `BASE_URL`（または `DEV_BASE_URL`）を設定  
   例: `BASE_URL=https://your-dev-app.example.com`

## 実行
- Cucumber (wdio): `npm run wdio` または `npm run test:features`
- Lint: `npm run test:lint`
- Unit (Jest): `npm run test:unit`
- 一括: `npm test`

## ディレクトリ
- `src/features/**/*.feature`: シナリオをここに追加
- `src/steps/{given,when,then}.ts`: ステップ定義を実装
- `src/support/hooks.js`: 必要なフックを有効化
- `wdio.conf.ts`: ローカル・共通設定（`BASE_URL` 参照）
- `wdio.BUILD.conf.ts`: CI 用設定（ヘッドレス Chrome、リーチャビリティチェック付き）

## ベースURLの設定
- `BASE_URL`（または `DEV_BASE_URL`）を環境変数で渡してください。  
- GitHub Actions 等では workflow 内でエクスポートしてください。

## サンプルシナリオ
サンプルは含めていません。プロジェクト側で feature/steps を追加してください。
