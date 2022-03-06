export GOPRIVATE="github.com/WincerChan"
npm install -g pnpm
pnpm i
echo "Cloning Blogs..."
git config --global url."https://${GH_TOKEN}@github.com".insteadOf "https://github.com"
git clone https://github.com/WincerChan/BlogContent
echo "Clone Blogs Succeed. Start Building..."
pnpm run build
echo "Build Succeed"
