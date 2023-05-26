import classes from "../style/Algorithm.module.css";
export default function Algorithm() {
  return (
    <div className={classes.container}>
      <main>
        <h2> Hill Cipher</h2>
        <p>
          Hill cipher is a substitution technique in symmetric encryption
          developed by Lester Hill in 1929. The algorithm takes m successive
          plaintext letters and substitutes for them m cipher text letters. In
          Hill cipher, each character is assigned a numerical value like a = 0,
          b = 1, z = 25 [5, 9]. The substitution of cipher text letters in the
          place of plaintext letters leads to m linear equation. For m = 3, the
          system can be described as follows:
        </p>
        <p>
          {" "}
          c1 = (k<sub>11</sub> &nbsp;p<sub>1</sub> + k<sub>12</sub>&nbsp; p
          <sub>2</sub> + k<sub>13</sub>&nbsp; p<sub>3</sub>) mod 26 <br></br>
          c1 = (k<sub>11</sub> &nbsp;p<sub>1</sub> + k<sub>13</sub>&nbsp; p
          <sub>2</sub> + k<sub>13</sub>&nbsp; p<sub>3</sub>) mod 26 <br></br>
          c1 = (k<sub>11</sub>&nbsp; p<sub>1</sub> + k<sub>13</sub> &nbsp;p
          <sub>2</sub> + k<sub>13</sub>&nbsp; p<sub>3</sub>) mod 26 <br></br>
        </p>
        <p>
          This can be expressed in term of column vectors and matrices:<br></br>
          c1 = k<sub>11</sub>&nbsp; k<sub>12</sub>&nbsp; k<sub>13</sub>&nbsp; p
          <sub>1</sub> <br></br>
          c2= k<sub>21</sub>&nbsp; k<sub>22</sub> &nbsp;k<sub>23</sub>&nbsp; p
          <sub>2</sub> &nbsp;mod &nbsp;26<br></br>
          c3= k<sub>31</sub>&nbsp; k<sub>32</sub>&nbsp; k<sub>33</sub>&nbsp; p
          <sub>3</sub> <br></br>
        </p>
        <p>
          by the operation of Column matrix we can find it out that C = KP,
          where C and P are column vectors of length 3, representing the
          plaintext and cipher text respectively, and K is a 3 × 3 matrix, which
          is the encryption key. All operations are performed mod 26 here.
          Decryption requires using the inverse of the matrix K. The inverse
          matrix K<sup>-1</sup> of a matrix K is defined by the equation KK
          <sup>-1</sup> = K<sup>-1</sup> K = I, where I is the Identity matrix.
        </p>
        <p>
          But the inverse of the matrix does not always exist, and when it does,
          it satisfies the preceding equation. K<sup>-1</sup> is applied to the
          cipher text, and then the plaintext is recovered. The term for
          encryption as follows. For encryption: C = Ek (P) = Kp For decryption:
          P = Dk(C) = K<sup>-1</sup> (C) = P
        </p>
        <p>
          If the block length is m, there are 26m different m letters blocks
          possible, each of them can be regarded as a letter in a 26m -letter
          alphabet. Hill&apos;s method amounts to a monoalphabetic substitution
          on this alphabet.
        </p>
        <h3>PROPOSED SCHEME</h3>
        <p>
          Implemented Hill Cipher technique one is cover image which act as key
          image which is shared by both sender and receiver and other is
          Informative image. As first step, we add cover image and informative
          image to obtained resultant image. The gray scale image is passed to
          the Hill Cipher algorithm to form encrypted image. The encrypted image
          is communicated over unsecured channel. The encrypted image after
          receiving by receiver passed to Hill Cipher technique. Receiver first
          obtained inverse of Key image, K-1. The resulted image which is
          encrypted is passed to the Hill Cipher to obtain Informative Image.
          The cover image is subtracted from merged image to obtained
          informative image. The detail process is summarized in figure 1.In
          proposed technique author has used hill cipher technique for
          encrypting image by breaking the image into blocks of length rather
          than whole image. In this paper image is divided into blocks of length
          and use hill cipher technique for encrypting blocks of image rather
          than whole image.
          {/* <h1>Give Image</h1> */}
        </p>
        <h3>ALGORITHM FOR PROPOSED SCHEME:</h3>
        <ul>
          <li>
            A pixel matrix of original image of dimensions n×n is constructed.
          </li>
          <li>The plain image is divided into n×n symmetric blocks.</li>
          <li> Generate a random key matrix of n×n</li>
          <li>
            For grayscale images, the number of levels is equal the number of
            alphabets.
          </li>
          <li>
            For color images-
            <ul>
              <li> decompose the color image into (R-G-B) components.</li>
              <li> encrypt each component (R-G-B) separately.</li>
              <li> obtain the cipher image.</li>
            </ul>
          </li>
          <li> Find the image matrix of cipher image.</li>
          <li>
            Decrypt the image with using the inverse square matrix of the same
            key.
          </li>
          <li> 8. Obtain the original image.</li>
        </ul>
        <p>
          <b>Image Encryption: </b>
          <br></br>
          <b>Find the pixel matrix of original image.</b>
          <br></br>
          Randomlygenerate a key matrix equal to the dimensions of image matrix
          to be encrypted.
          <b>Apply the concept of hill cipher i.e.</b>
          <br></br> C = E<sub>k</sub> (P) <br></br>
          <b>
            But in the concept of image we have 256 gray(For example)intensity
            levels so our approach will work as
          </b>
          <br></br>C = E<sub>K</sub> (P) mod 256<br></br> Where “C” is the
          matrix of cipher image, “P” is the matrix of original image and “k” is
          the randomly generated matrix value (key). After applying the concept
          each and every pixel of original image will substitute by the each and
          every pixel of cipher image.<br></br>
          <br></br> <b>Image Decryption:</b>
          <br></br>
          <ul>
            <li>
              For the decryption we find out the pixel matrix of cipher image.
            </li>
            <li>
              Consider the same value of k (key). As in the hill cipher for the
              text we had the equation.
            </li>
          </ul>
          P = D<sub>k</sub> (C) = K<sup>-1</sup> (C) = P <br></br>
          Same concept work for the image the difference will be only here again
          we considered the gray scale lave of image i.e. 256 now the equation
          will look like P = D<sub>k</sub> (C) = K<sup>-1</sup> (C) mod 256 = P
        </p>
      </main>
    </div>
  );
}
