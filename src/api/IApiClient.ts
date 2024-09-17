import {
    AcceptClaimRequest,
    AcceptClaimResponse,
    CheckPriceRequest,
    CheckPriceResponse,
    ClaimInfoResponse,
    ConfirmationCodeRequest,
    ConfirmationCodeResponse,
    CreateClaimRequest,
    CreateClaimResponse,
    TrackingLinksResponse,
} from "../types";

export interface IYandexDeliveryApi {
    checkPrice(data: CheckPriceRequest): Promise<CheckPriceResponse | void>;
    createClaim(data: CreateClaimRequest): Promise<CreateClaimResponse | void>;
    getClaimInfo(claim_id: string): Promise<ClaimInfoResponse | void>;
    acceptClaim(data: AcceptClaimRequest): Promise<AcceptClaimResponse | void>;
    getTrackingLink(claimId: string): Promise<TrackingLinksResponse | void>;
    getConfirmationCode(
        data: ConfirmationCodeRequest,
    ): Promise<ConfirmationCodeResponse | void>;
}
