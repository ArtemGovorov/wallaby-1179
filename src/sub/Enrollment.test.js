import enrollmentTransform from '../Enrollment'

describe('transform response', () => {
  let transformed = enrollmentTransform(responseData());

  it('should return school grade', () => {
    expect(transformed.grade).toEqual(6)
  })
  it('should return students section', () => {
    expect(transformed.section).toEqual('H')
  })
})


function responseData() {
  return [
    {
      "schoolClass": {
        "name": "6-H",
        "school": {}
      },
      "student": {}
    }
  ]
}