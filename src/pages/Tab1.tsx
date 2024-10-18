import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonAvatar, IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';
import { IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { checkmarkCircleOutline, warningOutline } from 'ionicons/icons';
import './Tab1.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tab1: React.FC = () => {

  const [items, setItems] = useState<any[]>([]); // State to store the fetched items
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    axios.get('https://uic.mserv.online/index.php/api/subjects')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="custom-color" style={{ 'backgroundColor': '#E65A7B', 'color': '#fff' }}>
          <IonTitle>Attendance Monitoring</IonTitle>
          <IonLabel slot='end'><em className="icon ni ni-list-thumb-alt px-4" style={{ 'fontSize': '24px' }}></em></IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light'>
        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="col-sm-12 col-lg-12 col-xxl-12 mb-2">
                  <div className="gallery card">
                    <a className="gallery-image popup-image bg-dark" href="./banner.png">
                      <img className="w-100 rounded-top" src="./banner.png" alt="" />
                    </a>
                    <div className="gallery-body card-inner align-center justify-between flex-wrap g-2">
                      <div className="user-card">
                        <div className="user-info">
                          <span className="lead-text">Welcome! Mr. Kent Russell N. Casiño</span>
                          <span className="sub-text">Last Login: Tue, Oct. 19, 2024 03:43 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className='row g-grid'>
                    {items.map((item) => (
                      <div className="col-sm-6 col-lg-4 col-xxl-4 mb-2">
                        <a href={'/details?id=' + item['so_id'] + '&sub=' +item['sub_title'] + '&sec=' + 'Code:' + item['sub_subject'] + '/ Section: ' + item['so_section'] + '&count=' + item['count']}>
                          <div className="gallery card">
                            <div className="gallery-body card-inner align-center justify-between flex-wrap g-2">
                              <div className="user-card">
                                <div className="user-avatar bg-light">
                                  <img src="./demo.jpg" alt="" />
                                </div>
                                <div className="user-info">
                                  <span className="lead-text">{item['sub_title'].substr(0, 18)}..</span>
                                  <span className="sub-text">Code: {item['sub_subject']} / Section: {item['so_section']}</span>
                                </div>
                              </div>
                              <br />
                              <div>
                                <button className="btn btn-p-0 btn-nofocus"><em className="icon ni ni-users"></em><span>{item['count']}</span></button>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>







      </IonContent>
    </IonPage>
  );
};

export default Tab1;
