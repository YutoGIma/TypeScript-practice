FROM node:10.13-alpine 
# ベースとなるDockerイメージを指定
RUN mkdir /link-button
# コンテナ内にmyappディレクトリを作成
WORKDIR /link-button
# 操作するディレクトリのパスを記述
RUN npm install -g ionic cordova
# パッケージ等のインストールのコマンドを記述し環境を作成
COPY . /link-button
# ローカルのmyapp配下のファイルをコンテナ内のmyapp配下にコピー
CMD ["sh"]
# コンテナ作成後に実行するコマンドを記述