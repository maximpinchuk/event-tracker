## Описание проекта

Проект состоит из двух папок: backend (код апи + скрипт самого трекера, который подгружается на страницу) и website (имитация какого-то сайта, на который будет подгружаться трекер)

___
## Инструкция по запуску

### Backend

```
cd backend
```

```
npm i
```

Копируем .env.example в .env и заполняем необходимые переменные
```
cp .env.example .env
```

```
npm run build
```

```
npm run start
```

### Website

```
cd website
```

```
npm i
```

```
npm run start
```

___
## Заметки

### Что мне не нравится

1. В реальном проекте я бы не стал пихать код трекера и апи в одну папку, я бы сделал это либо монорепой, либо трекер вообще уехал бы в отдельный репозиторий (тут зависит от специфики компании, проекта и т.д.). Даже если бы была задача, как и в тестовом, чтобы трекер и апи отдавались с одного домена, то я бы все равно разносил это в разные места, а роутинг настраивал бы на уровне nginx/apache/etc.
2. 

### Сложности, с которыми столкнулся

1. Очень давно не работал с mongodb, так что пришлось ставить ее на ноут и там всплыли какие-то проблемы с подключением к ней. Я решил не тратить время и взял Mongo Atlas

На тестовое потратил около 7 часов
