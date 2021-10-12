export GOPRIVATE="github.com/WincerChan"
echo "Cloning Blogs..."
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
git clone https://github.com/WincerChan/BlogContent
echo "Clone Blogs Succeed. Start Building..."
echo "Start Encrypting Pages..."
go run BlogContent/encrypt.go encrypt_posts.toml
