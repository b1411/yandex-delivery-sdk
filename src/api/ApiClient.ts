import {
    AcceptClaimRequest,
    AcceptClaimResponse,
    CheckPriceRequest,
    CheckPriceResponse,
    ClaimInfoResponse,
    CreateClaimRequest,
    CreateClaimResponse,
    ErrorResponse,
    TrackingLinksResponse,
    ConfirmationCodeRequest,
    ConfirmationCodeResponse,
} from "../types";
import { handleError } from "../utils/errorHandler";
import { IYandexDeliveryApi } from "./IApiClient";
import ky, { KyInstance } from "ky";

export class YandexDeliveryApi implements IYandexDeliveryApi {
    private client: KyInstance;

    constructor(token: string) {
        this.client = ky.extend({
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept-Language": "ru",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            prefixUrl: "https://b2b.taxi.yandex.net",
            hooks: {
                afterResponse: [
                    async (req, options, res) => {
                        if (!res.ok) {
                            try {
                                const errorResponse =
                                    await res.json<ErrorResponse>();
                                handleError(errorResponse);
                            } catch (e) {
                                throw new Error(res.statusText);
                            }
                        }
                        return res;
                    },
                ],
            },
        });
    }

    async checkPrice(
        data: CheckPriceRequest,
    ): Promise<CheckPriceResponse | void> {
        try {
            return await this.client
                .post<CheckPriceResponse>(
                    "/b2b/cargo/integration/v2/check-price",
                    {
                        json: data,
                    },
                )
                .json();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async createClaim(
        data: CreateClaimRequest,
    ): Promise<CreateClaimResponse | void> {
        try {
            return await this.client
                .post<CreateClaimResponse>(
                    "/b2b/cargo/integration/v2/claims/create",
                    {
                        json: data,
                    },
                )
                .json();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async getClaimInfo(claim_id: string): Promise<ClaimInfoResponse | void> {
        try {
            return await this.client
                .post<ClaimInfoResponse>(
                    "/b2b/cargo/integration/v2/claims/info",
                    {
                        searchParams: {
                            claim_id,
                        },
                    },
                )
                .json();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async acceptClaim(
        data: AcceptClaimRequest,
    ): Promise<AcceptClaimResponse | void> {
        try {
            return await this.client
                .post<AcceptClaimResponse>(
                    "/b2b/cargo/integration/v2/claims/accept",
                    {
                        json: data,
                    },
                )
                .json();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async getTrackingLink(
        claimId: string,
    ): Promise<TrackingLinksResponse | void> {
        try {
            return await this.client
                .post<TrackingLinksResponse>(
                    "/b2b/cargo/integration/v2/claims/tracking-links",
                    {
                        searchParams: {
                            claim_id: claimId,
                        },
                    },
                )
                .json();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async getConfirmationCode(
        data: ConfirmationCodeRequest,
    ): Promise<ConfirmationCodeResponse | void> {
        try {
            return await this.client
                .post<ConfirmationCodeResponse>(
                    "/b2b/cargo/integration/v2/claims/confirmation-code",
                    {
                        json: data,
                    },
                )
                .json();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }
}
