#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

git push -f git@github.com:s3bull/tic-tac-toe.git master:gh-pages

cd -