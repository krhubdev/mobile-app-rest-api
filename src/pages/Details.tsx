import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonAvatar, IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';
import { IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';

import { checkmarkCircleOutline, warningOutline } from 'ionicons/icons';
import './Tab1.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2'

const Details: React.FC = () => {

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('id');
    const subject = queryParams.get('sub');
    const section = queryParams.get('sec');
    const count = queryParams.get('count');

    const [items, setItems] = useState<any[]>([]); // State to store the fetched items
    const [loading, setLoading] = useState(true);  // Loading state

    function attendance() {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Attendance Updated!",
                    text: "The Attendance has been submitted.",
                    icon: "success"
                });
            }
        });
    }

    useEffect(() => {
        if (code) {
            axios.post('https://uic.mserv.online/index.php/api/details', {
                id: code,
            })
                .then(response => {
                    setItems(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
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
                                    <div className="gallery card mb-3">
                                        <a className="gallery-image popup-image bg-dark" href="./banner.png">
                                            <img className="w-100 rounded-top" src="./banner.png" alt="" />
                                        </a>
                                        <div className="gallery-body card-inner align-center justify-between flex-wrap g-2">
                                            <div className="user-card">
                                                <div className="user-info">
                                                    <span className="lead-text">{subject}</span>
                                                    <span className="sub-text">{section}</span>
                                                </div>
                                            </div>
                                            <br />
                                            <div>
                                                <button className="btn btn-p-0 btn-nofocus"><em className="icon ni ni-users"></em><span>{count}</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className='row g-grid'>
                                        {items.map((item) => (
                                            <div className="col-sm-6 col-lg-4 col-xxl-3 mb-1">
                                                <div className="gallery card">
                                                    <div className="gallery-body card-inner align-center justify-between flex-wrap g-2">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-light">
                                                                <img src="./user.png" alt="" />
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="sub-text">ID: {item['info_sid']}</span>
                                                                <span className="lead-text">{item['info_lname']}, {item['info_fname'].substr(0, 8)}..</span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div>
                                                            <button onClick={attendance} className="btn btn-p-0 btn-sm btn-success"><em className="icon ni ni-check"></em></button>&nbsp;
                                                            <button onClick={attendance} className="btn btn-p-0 btn-sm btn-danger"><em className="icon ni ni-cross"></em></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>







            </IonContent>
        </IonPage >
    );
};

export default Details;
