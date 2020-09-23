export interface ISession{
    loggedIn: boolean,
    organisationId: number
}
export interface IAppState{
    session: ISession
}