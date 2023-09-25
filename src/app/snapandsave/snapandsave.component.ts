import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapandsave',
  templateUrl: './snapandsave.component.html',
  styleUrls: ['./snapandsave.component.css']
})
export class SnapandsaveComponent implements OnInit {
  ngOnInit(): void {
      this.displayImageFromLocalStorage()
  }
  public snap() {
    var xx = this.takePhoto()
    console.log(xx);

  }

  // Fonction pour prendre une photo avec l'appareil du client
  async takePhoto(): Promise<string> {
    // Vérifier si l'appareil photo est disponible
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('L\'appareil photo n\'est pas disponible.');
    }

    // Accéder à l'appareil photo
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    // Capturer une image à partir de la vidéo
    const captureImage = (): string => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')!.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL('image/jpeg');

      // Arrêter la vidéo et libérer les ressources
      video.pause();
      stream.getTracks().forEach(track => track.stop());

      return imageUrl;
    };

    // Attendre que la vidéo soit chargée pour capturer l'image
    await new Promise(resolve => video.addEventListener('loadeddata', resolve));

    // Sauvegarder l'image dans le localStorage
    const imageUrl = captureImage();
    localStorage.setItem('photo', imageUrl);
    console.log('Photo sauvegardée avec succès dans le localStorage.');
    this.displayImageFromLocalStorage
    return imageUrl;
  }

  displayImageFromLocalStorage(): void {
    const imageUrl = localStorage.getItem('photo');
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      document.body.appendChild(img);
    } else {
      console.error('Aucune photo trouvée dans le localStorage.');
    }
  }
}
