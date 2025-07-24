# Сайт портфолио

## Требования к окружению
- NodeJS >= v 22

## 📧 Используется emailjs для отправки email:

### 1. **EmailJS** 
- ✅ 200 писем/месяц бесплатно
- ✅ Не требует backend
- ✅ Простая интеграция с React
- ✅ Поддержка различных email провайдеров


## 🚀 Пошаговая инструкция с EmailJS + Google reCAPTCHA

### Шаг 1: Настройка EmailJS

1. **Создайте аккаунт на [emailjs.com](https://www.emailjs.com/)**

2. **Настройте Email Service:**
   - Dashboard → Email Services → Add New Service
   - Выберите Gmail/Outlook/Yahoo (любой ваш email провайдер)
   - Следуйте инструкциям для подключения

3. **Создайте Email Template:**
   - Dashboard → Email Templates → Create New Template
   - Настройте шаблон с переменными: `{{from_name}}`, `{{from_email}}`, `{{message}}`

### Шаг 2: Настройка Google reCAPTCHA

1. **Зарегистрируйтесь на [Google reCAPTCHA](https://www.google.com/recaptcha/admin)**

2. **Создайте новый сайт:**
   - Тип: reCAPTCHA v2 ("I'm not a robot")
   - Домены: `<YOUR_SUBDOMEN>.github.io` и `localhost` (для тестирования)

3. **Установите библиотеку:**
   ```bash
   npm install react-google-recaptcha
   npm install @types/react-google-recaptcha
   ```

### Шаг 3: Создание переменных окружения

Создайте файл `cp .env.example .env`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### Шаг 5: Настройка для GitHub Pages


1. **Создайте GitHub Secrets для production:**
   - Перейдите в Settings → Secrets and variables → Actions
   - Добавьте секреты:
     - `REACT_APP_EMAILJS_SERVICE_ID`
     - `REACT_APP_EMAILJS_TEMPLATE_ID`
     - `REACT_APP_EMAILJS_PUBLIC_KEY`
     - `REACT_APP_RECAPTCHA_SITE_KEY`

2. **Создайте GitHub Actions workflow (.github/workflows/deploy.yml):**

```yaml:.github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        cache: 'npm'
        cache-dependency-path: client/package-lock.json
    
    - name: Install dependencies
      working-directory: client
      run: npm ci
    
    - name: Build
      working-directory: client
      run: npm run build
      env:
        REACT_APP_EMAILJS_SERVICE_ID: ${{ secrets.REACT_APP_EMAILJS_SERVICE_ID }}
        REACT_APP_EMAILJS_TEMPLATE_ID: ${{ secrets.REACT_APP_EMAILJS_TEMPLATE_ID }}
        REACT_APP_EMAILJS_PUBLIC_KEY: ${{ secrets.REACT_APP_EMAILJS_PUBLIC_KEY }}
        REACT_APP_RECAPTCHA_SITE_KEY: ${{ secrets.REACT_APP_RECAPTCHA_SITE_KEY }}
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: client/build 
```

### Шаг 6: Тестирование

1. **Локальное тестирование:**
   ```bash
   npm start
   ```

2. **Деплой на githubpages:**
   ```bash
   npm run deploy
   ```

Этот подход обеспечит надежную работу формы на GitHub Pages с защитой от спама и бесплатной отправкой email! 🚀