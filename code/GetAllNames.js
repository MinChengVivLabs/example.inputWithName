module.exports.function = function getAllNames (self) {
  var rslt = []
  rslt.push ("John")
  rslt.push ("Jane")
  if (self == null) {
    rslt.push ("NULL")
  }
  else {
    rslt.push(self.nameInfo.structuredName)
  }
  return rslt;
}
