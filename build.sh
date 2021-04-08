export GOPRIVATE="github.com/WincerChan"
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
echo "now cloning BLogContent"
git clone https://github.com/WincerChan/BlogContent
echo "Cloned succeed"
hugo --minify
echo "encrypted"
go run BlogContent/encrypt.go encrypt_posts.toml
