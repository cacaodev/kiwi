/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/

/**
 * @class Strength
 */
 export class Strength {
     /**
      * Create a new symbolic strength.
      *
      * @param {Number} a a
      * @param {Number} b b
      * @param {Number} c c
      * @param {Number} d d
      * @param {Number} e e
      * @param {Number} f f
      * @param {Number} [w] weight
      * @return {Number} strength
      */
     static create( a: number, b: number, c: number, d: number, e: number, f: number, w: number = 1.0 )
     {
         let result: number = 0.0;
         result += Math.max( 0.0, Math.min( 1000.0, a * w ) ) * Math.pow(10, 15);
         result += Math.max( 0.0, Math.min( 1000.0, b * w ) ) * Math.pow(10, 12);
         result += Math.max( 0.0, Math.min( 1000.0, c * w ) ) * Math.pow(10, 9);
         result += Math.max( 0.0, Math.min( 1000.0, d * w ) ) * Math.pow(10, 6);
         result += Math.max( 0.0, Math.min( 1000.0, e * w ) ) * Math.pow(10, 3);
         result += Math.max( 0.0, Math.min( 1000.0, f * w ) );
         return result;
     }

     /**
      * The 'required' symbolic strength.
      */
     static required = Strength.create( 1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1000.0 );

     /**
      * The 'strong' symbolic strength.
      */
     static strong = Strength.create( 0.0, 0.0, 0.0, 1.0, 0.0, 0.0 );

     /**
      * The 'medium' symbolic strength.
      */
     static medium = Strength.create( 0.0, 0.0, 0.0, 0.0, 1.0, 0.0 );

     /**
      * The 'weak' symbolic strength.
      */
     static weak = Strength.create( 0.0, 0.0, 0.0, 0.0, 0.0, 1.0 );

    /**
     * Clip a symbolic strength to the allowed min and max.
     * @private
     */
    static clip( value: number ) {
        return Math.max( 0.0, Math.min( Strength.required, value ) );
    }
}
