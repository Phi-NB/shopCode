npm init -y
npm install -D tailwindcss postcss autoprefixer vite
npx tailwindcss init -p

tại file package.json thì đổi tên trong script từ test -> dev, thuộc tính -> vite
npm run dev

npx tailwindcss build ./src/style.css -o ./dist/style.css
hoặc 
npx tailwindcss-cli build ./src/style.css -o ./dist/style.css --watch

trong file ./src/style.css thì import thêm 3 thư viện
@tailwind base;
@tailwind components;
@tailwind utilities;