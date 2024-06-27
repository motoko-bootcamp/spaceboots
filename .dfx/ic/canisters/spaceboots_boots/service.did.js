export const idlFactory = ({ IDL }) => {
  const Method = IDL.Text;
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const Request = IDL.Record({
    'url' : IDL.Text,
    'method' : Method,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StatusCode = IDL.Nat16;
  const Response = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : StatusCode,
  });
  const Boot = IDL.Service({
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
    'http_request' : IDL.Func([Request], [Response], ['query']),
    'transfer' : IDL.Func([], [], ['oneway']),
  });
  return Boot;
};
export const init = ({ IDL }) => { return []; };
