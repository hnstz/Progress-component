# Progress Component

Модуль для управления состоянием кругового прогресс-бара. 

Позволяет управлять уровнем заполненности, поддерживает режим анимации и функцию скрытия из интерфейса.

## Подключение 

Для инициализации компонента импортируйте класс и передайте ему необходимый HTML-элемент:

```javascript
import Progress from './Progress.js';
const progress = new Progress(document.querySelector('.your-custom-class'));

```

## API

### Конструктор

**`new Progress(element)`**

* `element` (HTMLElement): Корневой DOM-элемент компонента. Обязательный параметр.

### Методы

**`setValue(value)`**
Устанавливает уровень заполненности прогресс-бара.

* `value` (Number | String): Значение от 0 до 100.
* Метод автоматически ограничивает выход за допустимые пределы, невалидные типы данных приводятся к 0.

**`setAnimated(isAnimated)`**
Управляет режимом вращения компонента.

* `isAnimated` (Boolean): `true` — запустить анимацию, `false` — остановить.

**`setHidden(isHidden)`**
Управляет видимостью компонента на странице.

* `isHidden` (Boolean): `true` — скрыть блок, `false` — показать.

## Пример использования (app.js)

```javascript
import Progress from './Progress.js';

// Инициализация компонента
const progressBlock = document.querySelector('.progress');
const progress = new Progress(progressBlock);

// Изменение состояния прогресс-бара
progress.setValue(75);       // Установит заполненность дуги на 75%
progress.setAnimated(true);  // Включит вращение блока
progress.setHidden(true);    // Скроет блок со страницы

```

## Локальный запуск проекта

1. Склонируйте репозиторий:
```bash
https://github.com/hnstz/Progress-component.git
```
2. Откройте файл `index.html` в браузере.