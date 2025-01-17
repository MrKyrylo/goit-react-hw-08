import background from '../image/phonebook-1-removebg-preview.png';


const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
        backgroundImage: `url(${background})`,
      paddingLeft: '100px',
  },
    title: {
    fontWeight: 500,
    fontSize: 64,
    textAlign: 'center',
    color: 'rgba(229, 229, 229, 0.8)',
    textShadow: '2px 2px 2px rgb(24, 21, 51)',
  },
    phonebook: {
      fontSize: '60px',
      marginTop: '10px',
      marginBottom: '40px',
      color: 'rgba(106, 240, 255, 0.5)',
      textAlign: 'center',
      textShadow: '2px 2px 2px rgb(24, 21, 51)',
    },
    boxLink: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    welcome: {
      fontWeight: 500,
      fontSize: 48,
      textDecoration: 'underline',
      textAlign: 'center',
      color: 'rgba(201, 209, 209, 0.8)',
      textShadow: '2px 2px 2px rgb(24, 21, 51)',     
    },
    footer: {
      fontSize: '16px', 
    }
  };

export default function HomePage() {
  return (
    <>
      <h1 style={styles.phonebook}>PHONEBOOK</h1>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Your Personal Phonebook {' '}
          <br/>
          <span style={styles.welcome}>Welcome</span>  
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>          
        </h2>

      </div>
      <div>       
        <h3 style={styles.footer}>
        Phonebook offers the following features to ensure a more comfortable and seamless experience:
        quickly add contact (name, number phone), delete contact, search contact, store and managed contacts.
        </h3>
        </div> 
    </>
  );
}