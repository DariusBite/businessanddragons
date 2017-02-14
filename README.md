# Business & Dragons

r1: 6
r2: 8
r3: 10
r4: 12
r5: 14
r6: 14
r7: 12
r8: 10
r9: 8
r10: 6

hex {
  hex_id: 1
  kingdom_id: 1
  cuadrate: I, II, II, IV, 0, Y+, Y-, X+, X- 
  X: 1
  Y: 1
  name:
}

kingdom: {
  kingdom_id,
  name:
}

district: {
  district_id: 1
  name:
  row: 1 to 10
  cell: 1 to 14, only pair
  border_top:
  border_bottom:
  border_left:
  border_right:
}

building: {
  building_id: 1
  name:
  district_id:
  row: {}
  cell: {}
  building_type_id:
}

buildingType {
  building_type_id:
  name:
  size:
}
