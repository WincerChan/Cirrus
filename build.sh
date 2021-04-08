export GOPRIVATE="github.com/WincerChan"
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
go get github.com/WincerChan/BlogContent
git clone https://github.com/WincerChan/BlogContent ../BlogContent
hugo --minify
${GOPATH}/bin/BlogContent encrypt_posts.toml
