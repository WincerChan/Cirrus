export GOPRIVATE="github.com/WincerChan"
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
git clone https://github.com/WincerChan/BlogContent
hugo --minify
go run BlogContent/encrypt.go
