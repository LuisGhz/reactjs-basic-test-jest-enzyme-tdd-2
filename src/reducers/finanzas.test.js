import reducer, { agregar, eliminar } from "./finanzas";

describe('Finanzas Duck', () => {

  describe('Action creators', () => {
    
    it('Add', () => {
      const result = agregar(1);

      expect(result).toEqual({
        type: 'AGREGAR',
        payload: 1
      });
      
    });

    it('Delete', () => {
      const result = eliminar(1);

      expect(result).toEqual({
        type: 'ELIMINAR',
        index: 1
      });

    });

  });

  describe('reducer', () => {

    it('Add reducer', () => {
      const result = reducer([1], {
        type: 'AGREGAR',
        payload: 2
      });

      expect(result).toEqual([1, 2])
      
    });

    it('Delete reducer', () => {
      const result = reducer([1, 2], {
        type: 'ELIMINAR',
        index: 1
      });

      expect(result).toEqual([1])
    });
  })

})