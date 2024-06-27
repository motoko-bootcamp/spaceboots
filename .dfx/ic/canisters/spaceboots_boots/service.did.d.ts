import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Boot {
  'getOwner' : ActorMethod<[], Principal>,
  'http_request' : ActorMethod<[Request], Response>,
  'transfer' : ActorMethod<[], undefined>,
}
export type HeaderField = [string, string];
export type Method = string;
export interface Request {
  'url' : string,
  'method' : Method,
  'body' : Uint8Array | number[],
  'headers' : Array<HeaderField>,
}
export interface Response {
  'body' : Uint8Array | number[],
  'headers' : Array<HeaderField>,
  'status_code' : StatusCode,
}
export type StatusCode = number;
export interface _SERVICE extends Boot {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
