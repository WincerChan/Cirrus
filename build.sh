export GOPRIVATE="github.com/WincerChan"
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
echo "Cloning Blogs..."
git clone https://github.com/WincerChan/BlogContent
echo "Clone Blogs Succeed. Start hugo --minify..."
hugo --minify
Echo "Start Encrypting pages..."
go run BlogContent/encrypt.go encrypt_posts.toml
