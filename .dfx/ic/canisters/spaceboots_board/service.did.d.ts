import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type BootCanister = Principal;
export type BootName = string;
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : Method,
  'body' : Uint8Array | number[],
  'headers' : Array<HeaderField>,
}
export interface HttpResponse {
  'body' : Uint8Array | number[],
  'headers' : Array<HeaderField>,
  'status_code' : StatusCode,
}
export type Method = string;
export type StatusCode = number;
export interface _SERVICE {
  'addToCollection' : ActorMethod<[BootName, BootCanister], undefined>,
  'http_request' : ActorMethod<[HttpRequest], HttpResponse>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
