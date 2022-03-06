echo "Starting install npm packages..."
npm install -g pnpm
pnpm i
echo "Cloning Blogs..."
git clone https://${GH_TOKEN}@github.com/WincerChan/BlogContent _blogs
echo "Clone Blogs Succeed. Start Building..."
pnpm run build
echo "Build Succeed"
