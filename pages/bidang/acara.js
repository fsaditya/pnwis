import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import firebase from '../../firebase/appClient';

import Datadiri from '../../components/datadiri';
import Acara from '../../components/question/acara';
import Container from '../../components/container';
import FormType from '../../components/formType';
import CV from '../../components/cv';
import IsDone from '../../components/isdone';

import Close from '../../components/close';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepIcon: {
    color: '#a77b4d !important',
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#a77b4d'),
    backgroundColor: '#a77b4d',
    padding: '10px 10px',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#a77b4d',
    },
  },
  disabled: {
    backgroundColor: 'rgb(235,235,228)',
  },
}))(Button);

function getSteps() {
  return ['Data Diri', 'Pertanyaan', 'CV'];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setForm] = useState({
    nama: '',
    npm: '',
    prodi: '',
    kelas: '',
    idLine: '',
    noWhatsapp: '',
    email: '',
    pengalaman: '',
    tertarik: '',
    rangkaian: '',
    ide: '',
    inovasi: '',
    alasan: '',
    prioritas: '',
    komitmen: '',
    bidangAlternatif: '',
  });

  const [fileName, setfileName] = useState('');

  const [isLoading, setisLoading] = useState(false);

  const [isDone, setisDone] = useState(false);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleInput = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleFileInput = fileInput => {
    setfileName(fileInput);
  };

  const handleSubmit = () => {
    if (fileName.length === 0) {
      return toast.error(`Jangan lupa upload CV di kolom yg disediakan`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const result = !Object.values(form).some(element => element === '');

    if (!result) {
      toast.error(`Jangan lupa isi semua kolom yang tersedia`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const db = firebase.firestore();
      const storage = firebase.storage();

      setisLoading(true);

      const uploadTask = storage
        .ref(`acara/${fileName[0].name}`)
        .put(fileName[0])
        .then(data => {
          data.ref.getDownloadURL().then(url => {
            db.collection('acara')
              .add({
                ...form,
                downloadUrl: url,
                timestamps: firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                setisDone(true);

                // fetch(
                //   'https://email-service-panwis.herokuapp.com/api/v1/sendmail',
                //   {
                //     method: 'POST',
                //     headers: {
                //       'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(
                //       { nama: form.nama, email: form.email }
                //         .then(data => {
                //           console.log(data);
                //         })
                //         .catch(err => {
                //           console.log(err);
                //         })
                //     ),
                //   }
                // );
              })
              .catch(err => {
                console.log(err);
              });
          });
        })
        .catch(err => {
          setisLoading(false);
        });
    }
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Datadiri handleInput={handleInput} data={form} />;
      case 1:
        return <Acara handleInput={handleInput} data={form} />;
      case 2:
        return (
          <CV
            handleInput={handleInput}
            handleFile={handleFileInput}
            data={form}
          />
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <>
      {/* <Close /> */}
      <Head>
        <title>Bidang Acara</title>
      </Head>
      {/* <FormType> */}
      <Container> 
        {isDone ? (
          <IsDone />
        ) : (
          <>
            <Stepper activeStep={activeStep}>
              {steps.map(label => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel
                      StepIconProps={{
                        classes: { root: classes.stepIcon },
                      }}
                      {...labelProps}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            <div>
              <div>{getStepContent(activeStep)}</div>

              <div style={{ textAlign: 'center' }}>
                <div>                  
                  <ColorButton disabled={activeStep === 0} onClick={handleBack}>
                    Sebelumnya
                  </ColorButton>
                  {activeStep === steps.length - 1 ? (
                    <ColorButton onClick={handleSubmit} disabled={isLoading}>
                      {isLoading ? 'Menyimpan.....' : 'Selesai'}
                    </ColorButton>
                  ) : (
                    
                    <ColorButton onClick={handleNext}>
                      <div className="btn-custom">
                        Selanjutnya
                      </div>
                    </ColorButton>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
      {/* </FormType> */}
    </>
  );
}
