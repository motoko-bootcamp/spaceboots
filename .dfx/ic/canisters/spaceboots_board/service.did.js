export const idlFactory = ({ IDL }) => {
  const BootName = IDL.Text;
  const BootCanister = IDL.Principal;
  const Method = IDL.Text;
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : Method,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StatusCode = IDL.Nat16;
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : StatusCode,
  });
  return IDL.Service({
    'addToCollection' : IDL.Func([BootName, BootCanister], [], []),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
