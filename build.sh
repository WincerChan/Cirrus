export GOPRIVATE="github.com/WincerChan"
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
git clone https://github.com/WincerChan/BlogContent
yarn build
go run BlogContent/encrypt.go encrypt_posts.toml
