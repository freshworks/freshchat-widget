export declare class FreshchatService {
    widget: any;
    user: any;
    private userCreationStatus;
    userCreation: any;
    constructor();
    broadcastStatus(resp: any): void;
    init(payload: any): void;
    loadWidget: (user: any) => void;
    validateUser: (response: any, user: any) => void;
    createUser: () => void;
    updateUser: (response: any, user: any) => void;
}
