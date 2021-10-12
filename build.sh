echo "Cloning Blogs..."
export GOPRIVATE="github.com/WincerChan"
git clone https://${GH_TOKEN}@github.com/WincerChan/BlogContent
echo "Clone Blogs Succeed. Start Building..."
yarn install
yarn build
echo "Start Encrypting Pages..."
go run BlogContent/encrypt.go encrypt_posts.toml
