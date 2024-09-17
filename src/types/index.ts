export interface CheckPriceRequest {
    items: Array<{
        size: {
            length: number;
            width: number;
            height: number;
        };
        weight: number;
        quantity: number;
        pickup_point: number;
        dropoff_point: number;
    }>;
    route_points: Array<{
        id: number;
        coordinates: [number, number];
        fullname: string;
    }>;
    requirements: {
        taxi_class: string;
        cargo_type?: "van" | "lcv_m" | "lcv_l" | "lcv_xl";
        cargo_loaders?: number;
        pro_courier?: boolean;
        cargo_options?: string[];
        same_day_data?: {
            delivery_interval: {
                from: string;
                to: string;
            };
        };
    };
    skip_door_to_door?: boolean;
}

export interface CheckPriceResponse {
    price: string;
    currency: string;
    delivery_time: {
        min: number;
        max: number;
    };
    warnings?: Array<{
        source: string;
        code: string;
        message: string;
    }>;
}

export interface CreateClaimRequest {
    shipping_document?: string;
    items: Array<{
        extra_id: string;
        pickup_point: number;
        dropoff_point: number;
        title: string;
        size: {
            length: number;
            width: number;
            height: number;
        };
        weight: number;
        cost_value: string;
        cost_currency: string;
        quantity: number;
        fiscalization?: {
            excise: string;
            vat_code_str: string;
            supplier_inn: string;
            article: string;
            mark?: {
                kind: string;
                code: string;
            };
            item_type: string;
        };
    }>;
    route_points: Array<{
        point_id: number;
        visit_order: number;
        contact: {
            name: string;
            phone: string;
            phone_additional_code?: string;
            email?: string;
        };
        address: {
            fullname: string;
            coordinates: [number, number];
            country: string;
            city: string;
            street: string;
            building: string;
            porch?: string;
            sfloor?: string;
            sflat?: string;
            door_code?: string;
            door_code_extra?: string;
            doorbell_name?: string;
            comment?: string;
        };
        leave_under_door?: boolean;
        meet_outside?: boolean;
        no_door_call?: boolean;
        type: "source" | "destination" | "return";
        buyout?: {
            payment_method: string;
        };
        external_order_cost?: {
            value: string;
            currency: string;
            currency_sign?: string;
        };
        external_order_id?: string;
        payment_at_point?: "cash" | "cash_like";
        payment_on_delivery?: {
            customer: {
                inn: string;
                email: string;
                phone: string;
            };
            payment_method: string;
        };
        pickup_code?: string;
    }>;
    emergency_contact: {
        name: string;
        phone: string;
        phone_additional_code?: string;
    };
    client_requirements?: {
        taxi_class: string;
        cargo_type?: string;
        cargo_loaders?: number;
        cargo_options?: string[];
        pro_courier?: boolean;
    };
    callback_properties?: {
        callback_url: string;
    };
    skip_door_to_door?: boolean;
    skip_client_notify?: boolean;
    skip_emergency_notify?: boolean;
    skip_act?: boolean;
    optional_return?: boolean;
    due?: string;
    comment?: string;
    referral_source?: string;
    same_day_data?: {
        delivery_interval: {
            from: string;
            to: string;
        };
    };
    auto_accept?: boolean;
    offer_payload?: string;
    features_context?: object;
}

export interface CreateClaimResponse {
    id: string;
    status: string;
    version: number;
    user_request_revision: string;
    pricing?: {
        offer: {
            offer_id: string;
            price: string;
            valid_until: string;
        };
        final_price: string;
        currency: string;
    };
}

export interface ClaimInfoResponse {
    id: string;
    corp_client_id: string;
    items: Array<{
        extra_id: string;
        pickup_point: number;
        droppof_point: number;
        title: string;
        size: {
            length: number;
            width: number;
            height: number;
        };
        weight: number;
        cost_value: string;
        cost_currency: string;
        quantity: number;
        fiscalization?: {
            excise: string;
            vat_code_str: string;
            supplier_inn: string;
            article: string;
            mark?: {
                kind: string;
                code: string;
            };
            item_type: string;
        };
    }>;
    route_points: Array<{
        id: number;
        contact: {
            name: string;
            phone: string;
            phone_additional_code?: string;
            email?: string;
        };
        address: {
            fullname: string;
            coordinates: [number, number];
            country: string;
            city: string;
            street: string;
            building: string;
            porch?: string;
            sfloor?: string;
            sflat?: string;
            door_code?: string;
            door_code_extra?: string;
            doorbell_name?: string;
            comment?: string;
        };
        type: "source" | "destination" | "return";
        payment_on_delivery?: {
            payment_ref_id: string;
            client_order_id: string;
            is_paid: boolean;
            customer: {
                full_name: string;
                inn: string;
                email: string;
                phone: string;
            };
            payment_method: string;
            invoice_link: string;
        };
        external_order_cost?: {
            value: string;
            currency: string;
            currency_sign?: string;
        };
        expected_visit_interval: {
            from: string;
            to: string;
        };
        pickup_code?: string;
    }>;
    current_point_id: number;
    status: string;
    version: number;
    client_requirements?: {
        taxi_class: string;
        cargo_type?: string;
        cargo_loaders?: number;
        cargo_options?: string[];
        pro_courier?: boolean;
    };
    pricing?: {
        offer: {
            offer_id: string;
            price: string;
            valid_until: string;
            price_with_vat: string;
        };
        currency: string;
        currency_rules: {
            code: string;
            text: string;
            template: string;
            sign: string;
        };
        final_price: string;
    };
    performer_info?: {
        courier_name: string;
        legal_name: string;
        car_model: string;
        car_number: string;
        car_color: string;
        transport_type: string;
    };
    callback_properties?: {
        callback_url: string;
    };
    warnings?: Array<{
        source: string;
        code: string;
        message: string;
    }>;
    created_ts: string;
    updated_ts: string;
    error_messages?: Array<{
        code: string;
        message: string;
    }>;
    comment?: string;
    eta: number;
}

export interface AcceptClaimRequest {
    version: number;
}

export interface AcceptClaimResponse {
    id: string;
    status: string;
    version: number;
    user_request_revision: string;
    skip_client_notify: boolean;
}

export interface PointWithSharingLink {
    id: number; // Point ID
    type: "source" | "destination" | "return"; // Type of point
    visit_order: number; // Order of visit
    sharing_link?: string; // Tracking link (only for 'destination' points)
}

export interface TrackingLinksResponse {
    route_points: PointWithSharingLink[]; // List of route points with sharing links
}

export interface ConfirmationCodeRequest {
    claim_id: string; // Claim ID, must be a string with length between 32 and 64 characters
}

export interface ConfirmationCodeResponse {
    code: string; // The confirmation code
    attempts: number; // Number of remaining code entry attempts
}

export interface ErrorResponse {
    code: string; // Error code
    message: string; // Error message
}
