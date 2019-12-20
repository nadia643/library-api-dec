beforeEach(() => {
    console.log('beforeEach')
  })
  
  describe('tests', () => {
    before(() => {
      console.log('before')
    })
  
    it('test 1', () => {
      console.log('it')
    })
  })