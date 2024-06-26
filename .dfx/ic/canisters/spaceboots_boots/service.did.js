export const idlFactory = ({ IDL }) => {
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const StatusCode = IDL.Nat16;
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : StatusCode,
  });
  const Boot = IDL.Service({
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
    'http_request' : IDL.Func([], [HttpResponse], ['query']),
    'transfer' : IDL.Func([], [], ['oneway']),
  });
  return Boot;
};
export const init = ({ IDL }) => { return []; };
