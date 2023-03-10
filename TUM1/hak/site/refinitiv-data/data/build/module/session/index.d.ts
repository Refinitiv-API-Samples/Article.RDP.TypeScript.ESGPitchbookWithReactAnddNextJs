import { ApiEndpoint, ApiEndpoints, Session, SessionDefinition as Definition, SessionEvent as Event, SessionEventCode as EventCode, SessionRequestParams as RequestParams, SessionRequiredParams as RequiredParams, SessionState as State } from './session.interface';
export * from './desktop/desktop-session-params.interface';
export * from './platform/platform-session-params.interface';
import { DesktopSession as Desktop } from './desktop/desktop-session';
import { PlatformSession as Platform } from './platform/platform-session';
export * from './container/container-session-params.interface';
export * from './container/jet-bus-browser';
export * from './container/transport.interface';
import { ContainerSession as Container } from './container/container-session';
export { getDefault, setDefault } from './default-session';
export { Session, Container, Desktop, Platform, State, Event, EventCode, Definition, ApiEndpoint, ApiEndpoints, RequestParams, RequiredParams, };
