import classes from "../style/Abstract.module.css";
export default function Abstarct() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>
        Encipher and Decipher Image Using Hill Cipher and Bit Manipulation
      </h2>
      <h3 className={classes.names}>
        Satwik Das , Amit Mohapatra , Swayam Swastik Samal , Gourav Sinha
      </h3>
      <h3 className={classes.names}>
        <b>Dr Susmita Panda</b>
      </h3>
      <h3 className={classes.institute}>
        Institute of Technical Education and Research (ITER),<br></br> Siksha
        &#39;O&#39; Anusandhan Deemed to be University, Bhubaneswar, 751030
      </h3>
      <p className={classes.text}>
        In ancient times, people used to hide information through ink, pen and
        various physical methods. Today’s world is a digital world where we can
        hide information using cryptographic algorithms. Cryptography is a
        technique of securing information and communications through the use of
        codes so that only those people for whom the information is intended can
        understand and process it. In cryptographic terms, plain texts are
        messages/information to be encrypted, the cipher text is the encoded
        message and codes or keys are used to encrypt the message known as
        cipher. Here, we proposed a method to encrypt the image by using a
        user-specified key through an image and passing the key through the Hill
        cipher algorithm. We’ve taken a backup invertible key in case there’s no
        key specified by the user. The image is a N by M matrix of tuples
        containing RGB values. So, we split the image into red, green and blue
        colour channels. Then we multiply the key with the 3 colour channels and
        then perform some rounds of bit manipulation and at last permute each
        tuple according to any specified algorithm. After this, we combine the
        three-colour channels to get the encrypted image. We can similarly
        decrypt the image by splitting the encrypted image into three
        corresponding colour channels, then perform the same round of bit
        manipulation and permutations in reverse order and multiply it with the
        inverse of the key to get the original image.
      </p>
      <p className={classes.keys}>
        Keywords: Image Processing, Image Encryption, Bit manipulation, Image
        Decryption, Hill Cipher
      </p>
    </div>
  );
}
