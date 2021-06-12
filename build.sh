export GOPRIVATE="github.com/WincerChan"
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
echo "Cloning Blogs..."
git clone https://github.com/WincerChan/BlogContent
echo "Clone Blogs Succeed. Start Building..."
yarn build
Echo "Start Encrypting Pages..."
go run BlogContent/encrypt.go encrypt_posts.toml
