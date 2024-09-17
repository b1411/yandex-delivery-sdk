# Yandex Delivery SDK

SDK для работы с API Яндекс Доставки.

## Установка

```sh
npm install yandex-delivery-sdk
````

## Использование

```ts
import { YandexDeliveryApi } from "yandex-delivery-sdk";

const api = new YandexDeliveryApi("ваш_токен");

// Пример использования метода checkPrice
api.checkPrice({
    /* параметры запроса */
})
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```

## Методы

### `checkPrice(data: CheckPriceRequest): Promise<CheckPriceResponse | void>`

Проверка стоимости доставки.

### `createClaim(data: CreateClaimRequest): Promise<CreateClaimResponse | void>`

Создание заявки на доставку.

### `getClaimInfo(claim_id: string): Promise<ClaimInfoResponse | void>`

Получение информации о заявке.

### `acceptClaim(data: AcceptClaimRequest): Promise<AcceptClaimResponse | void>`

Принятие заявки.

### `getTrackingLink(claimId: string): Promise<TrackingLinksResponse | void>`

Получение ссылки для отслеживания.

### `getConfirmationCode(data: ConfirmationCodeRequest): Promise<ConfirmationCodeResponse | void>`

Получение кода подтверждения.

## Классы

### `YandexDeliveryApi`

Класс для взаимодействия с API Яндекс Доставки.

#### Конструктор

```ts
constructor(token: string)
```

Создает экземпляр `YandexDeliveryApi`.

## Типы

Типы данных, используемые в SDK, находятся в `src/types/index.ts`.

## Лицензия

MIT
