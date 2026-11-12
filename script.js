document.documentElement.classList.replace("no-js", "js");

const contactEmail = "nath.affog@gmail.com";
const showreelUrl = "https://youtu.be/X4Oh6KqcvfU";
const showreelThumbnail = "assets/images/showreel/showreel-cover.jpg";

const translations = {
  fr: {
    brand: { home: "Retour à l'accueil" }, nav: { showreel: "Showreel", projects: "Projets", skills: "Compétences", about: "À propos", contact: "Me contacter" },
    menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu", chooseLanguage: "Choisir la langue",
    hero: { eyebrow: "Portfolio audiovisuel · 2026", intro: "Monteur vidéo, créateur audiovisuel et motion designer. Je compose des images qui racontent, rythment et laissent une empreinte.", projectsCta: "Voir mes réalisations", availability: "Disponible en alternance", visualCaption: "Image · rythme · émotion", scroll: "Faire défiler pour explorer", visualAria: "Composition graphique audiovisuelle", visualEdit: "Montage", visualMotion: "Motion", visualFrame: "Cadre" },
    showreel: { label: "Showreel", meta: "Une sélection en mouvement\nà regarder directement ici.", titleLead: "Mon regard", titleAccent: "en mouvement.", description: "Un aperçu de mon approche : construire un rythme, révéler une intention et donner une cohérence à chaque plan.", empty: "SHOWREEL · URL À AJOUTER", ready: "SHOWREEL", iframeTitle: "Showreel de Nathan AFFOGNITODE", hint: "Renseignez l'URL YouTube dans script.js", unavailable: "Le showreel n'est pas encore configuré.", invalid: "URL YouTube invalide. Vérifiez la configuration.", close: "Fermer la vidéo", play: "Lire le showreel" },
    projects: { label: "Sélection de projets", titleLead: "Des images", titleAccent: "qui racontent.", meta: "Chaque projet est une\nrencontre entre intention et matière.", watch: "Regarder la vidéo", noVideo: "Aucune vidéo configurée", invalid: "URL YouTube invalide. Vérifiez la configuration.", previewError: "Aperçu vidéo indisponible.", play: "Lire la vidéo", close: "Fermer la vidéo", noMedia: "Médias à ajouter", openImage: "Agrandir l'image", previous: "Photo précédente", next: "Photo suivante", closeImage: "Fermer la photo", gallery: "Galerie de médias" },
    details: { label: "Mes projets à venir", meta: "Projets en préparation\net prochaines étapes." },
    skills: { label: "Compétences", meta: "Les outils au service\nde la narration.", post: "Post-production", content: "Création de contenu", creative: "Création visuelle", layout: "Mise en page", social: "Réseaux sociaux", editing: "Montage" },
    skillLevels: { intermediate: "Intermédiaire", beginner: "Débutant" },
    about: { label: "À propos & formation", titleLead: "Créer avec", titleAccent: "intention.", lead: "Je transforme une idée en expérience visuelle, du premier cadre au dernier raccord.", description: "Je développe une pratique à la croisée du montage vidéo, du motion design, de la photographie et de la production audiovisuelle. Je recherche une alternance pour continuer à apprendre au sein d'une équipe et contribuer à des projets exigeants.", educationLabel: "Formation · En cours", education: "Bachelor Chef de Projet Digital — spécialisation Développement Web en troisième année" },
    contact: { label: "Contact", titleLead: "Un projet à", titleAccent: "mettre en images ?", description: "Je suis à la recherche d'une alternance dans le secteur audiovisuel. Écrivez-moi ou appelez-moi pour parler de votre projet.", notConfigured: "Aucune adresse de contact n'est configurée pour le moment.", emailLabel: "Écrire à", phoneLabel: "Appeler le", messageLabel: "Votre message", messagePlaceholder: "Parlez-moi de votre projet...", submit: "Préparer le message", opening: "Votre logiciel de messagerie va s'ouvrir.", footer: "Alternance · Production · Collaboration", noEmail: "Aucune adresse réelle n'est configurée : le message n'a pas été envoyé." },
    footer: { tagline: "Images, rythme & intention · Portfolio audiovisuel", back: "Retour en haut ↑" },
    statuses: { completed: "Projet terminé", active: "Projet personnel en activité", upcoming: "En préparation" }
  },
  en: {
    brand: { home: "Back to home" }, nav: { showreel: "Showreel", projects: "Projects", skills: "Skills", about: "About", contact: "Get in touch" },
    menuOpen: "Open menu", menuClose: "Close menu", chooseLanguage: "Choose language",
    hero: { eyebrow: "Audiovisual portfolio · 2026", intro: "Video editor, audiovisual creator and motion designer. I compose images that tell stories, create rhythm and leave a mark.", projectsCta: "See my work", availability: "Available for an apprenticeship", visualCaption: "Image · rhythm · emotion", scroll: "Scroll to explore", visualAria: "Audiovisual graphic composition", visualEdit: "Editing", visualMotion: "Motion", visualFrame: "Frame" },
    showreel: { label: "Showreel", meta: "A moving selection\nto watch right here.", titleLead: "My eye", titleAccent: "in motion.", description: "A glimpse into my approach: building rhythm, revealing intention and giving every shot a clear direction.", empty: "SHOWREEL · URL TO ADD", ready: "SHOWREEL", iframeTitle: "Nathan AFFOGNITODE showreel", hint: "Add the YouTube URL in script.js", unavailable: "The showreel is not configured yet.", invalid: "Invalid YouTube URL. Check the configuration.", close: "Close video", play: "Play the showreel" },
    projects: { label: "Selected projects", titleLead: "Images", titleAccent: "that tell stories.", meta: "Every project is a\nmeeting of intention and material.", watch: "Watch video", noVideo: "No video configured", invalid: "Invalid YouTube URL. Check the configuration.", previewError: "Video preview unavailable.", play: "Play video", close: "Close video", noMedia: "Media to add", openImage: "Open image", previous: "Previous photo", next: "Next photo", closeImage: "Close photo", gallery: "Media gallery" },
    details: { label: "Upcoming projects", meta: "Projects in preparation\nand next steps." },
    skills: { label: "Skills", meta: "Tools serving\nthe story.", post: "Post-production", content: "Content creation", creative: "Visual creation", layout: "Layout", social: "Social media", editing: "Editing" },
    skillLevels: { intermediate: "Intermediate", beginner: "Beginner" },
    about: { label: "About & education", titleLead: "Create with", titleAccent: "intention.", lead: "I turn an idea into a visual experience, from the first frame to the final cut.", description: "I am developing a practice at the crossroads of video editing, motion design, photography and audiovisual production. I am looking for an apprenticeship to keep learning within a team and contribute to demanding projects.", educationLabel: "Education · Ongoing", education: "Bachelor's in Digital Project Management — Web Development specialization, third year" },
    contact: { label: "Contact", titleLead: "A project to", titleAccent: "bring to life?", description: "I am looking for an apprenticeship in the audiovisual sector. Email or call me to discuss your project.", notConfigured: "No contact address is configured yet.", emailLabel: "Email", phoneLabel: "Call", messageLabel: "Your message", messagePlaceholder: "Tell me about your project...", submit: "Prepare message", opening: "Your mail application will open.", footer: "Apprenticeship · Production · Collaboration", noEmail: "No real address is configured: the message was not sent." },
    footer: { tagline: "Images, rhythm & intention · Audiovisual portfolio", back: "Back to top ↑" },
    statuses: { completed: "Completed project", active: "Active personal project", upcoming: "In preparation" }
  }
};

const featuredProjects = [
  {
    title: { fr: "Art & Strong", en: "Art & Strong" },
    category: { fr: "Vidéo promotionnelle · Produit", en: "Promotional video · Product" },
    description: { fr: "Vidéo promotionnelle et série de photographies consacrées aux produits et accessoires.", en: "Promotional video and a photography series focused on products and accessories." },
    role: { fr: "Tournage et captation selon ma participation · Montage vidéo · Photographie produit", en: "Filming and capture according to my contribution · Video editing · Product photography" },
    status: "completed", accent: "sunset",
    media: [
      { type: "video", url: "", title: { fr: "Vidéo promotionnelle Art & Strong", en: "Art & Strong promotional video" }, description: { fr: "Vidéo promotionnelle Art & Strong.", en: "Art & Strong promotional video." }, thumbnail: "assets/images/art-strong/cover.jpg" },
      { type: "image", url: "assets/images/art-strong/photo-01.JPG", title: { fr: "Produit Art & Strong 01", en: "Art & Strong product 01" }, description: { fr: "Photographie d'un produit Art & Strong.", en: "Photograph of an Art & Strong product." } },
      { type: "image", url: "assets/images/art-strong/photo-02.JPG", title: { fr: "Produit Art & Strong 02", en: "Art & Strong product 02" }, description: { fr: "Photographie d'un accessoire Art & Strong.", en: "Photograph of an Art & Strong accessory." } },
      { type: "image", url: "assets/images/art-strong/photo-03.JPG", title: { fr: "Produit Art & Strong 03", en: "Art & Strong product 03" }, description: { fr: "Photographie d'un accessoire Art & Strong.", en: "Photograph of an Art & Strong accessory." } }
    ]
  },
  {
    title: { fr: "Naffog", en: "Naffog" },
    category: { fr: "Réseaux sociaux · Storytelling", en: "Social media · Storytelling" },
    description: { fr: "Projet personnel en activité : contenus photo et vidéo pour les réseaux sociaux.", en: "Active personal project: photo and video content for social media, storytelling and animation." },
    role: { fr: "Montage · Storytelling · Motion design", en: "Editing · Storytelling · Motion design" },
    techniques: { fr: "À compléter avec les logiciels et techniques utilisés.", en: "Add the software and techniques used." },
    status: "active", accent: "blue",
    media: [
      { type: "image", url: "assets/images/naffog/cover.jpg", title: { fr: "Photo Naffog", en: "Naffog photo 01" }, description: { fr: "Photo de contenu Naffog 01.", en: "Naffog content photo 01." } },
      { type: "local-video", src: "assets/videos/naffog/video-01.mp4", title: { fr: "Vidéo Naffog 01", en: "Naffog video 01" }, description: { fr: "Vidéo de contenu Naffog 01.", en: "Naffog content video 01." } },
      { type: "local-video", src: "assets/videos/naffog/video-02.mp4", title: { fr: "Vidéo Naffog 02", en: "Naffog video 02" }, description: { fr: "Vidéo de contenu Naffog 02.", en: "Naffog content video 02." } },
    ]
  }
];

const upcomingProjects = [
  {
    title: { fr: "Zagar", en: "Zagar" },
    category: { fr: "Shooting photographique · En préparation", en: "Photography shoot · In preparation" },
    description: { fr: "Shooting photographique pour une marque de bijoux.", en: "Photography shoot for a jewellery brand." },
    role: { fr: "Rôle à préciser", en: "Role to be specified" },
    status: "upcoming", accent: "lime", media: []
  },
  {
    title: { fr: "La Congolaise", en: "La Congolaise" },
    category: { fr: "Projet audiovisuel · En préparation", en: "Audiovisual project · In preparation" },
    description: { fr: "Projet audiovisuel à venir.", en: "Upcoming audiovisual project." },
    role: { fr: "Rôle à préciser", en: "Role to be specified" },
    techniques: { fr: "Aucun média disponible pour le moment.", en: "No media available yet." },
    status: "upcoming", accent: "ochre", media: []
  }
];

let language = "fr";
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const t = (key) => key.split(".").reduce((value, part) => value?.[part], translations[language]) || key;
const localized = (value) => typeof value === "string" ? value : value[language];

function applyTranslations() {
  document.documentElement.lang = language;
  document.title = language === "fr" ? "Nathan AFFOGNITODE — Créateur audiovisuel" : "Nathan AFFOGNITODE — Audiovisual creator";
  const description = language === "fr"
    ? "Portfolio de Nathan AFFOGNITODE, monteur vidéo et créateur audiovisuel : montage, motion design, photographie et production."
    : "Portfolio of Nathan AFFOGNITODE, video editor and audiovisual creator: editing, motion design, photography and production.";
  $("meta[name='description']")?.setAttribute("content", description);
  $("meta[property='og:title']")?.setAttribute("content", document.title);
  $("meta[property='og:description']")?.setAttribute("content", description);
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
    element.style.whiteSpace = t(element.dataset.i18n).includes("\n") ? "pre-line" : "";
  });
  $$("[data-i18n-aria]").forEach((element) => element.setAttribute("aria-label", t(element.dataset.i18nAria)));
  $$("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  $$("[data-video-label]").forEach((element) => { element.textContent = t("showreel.empty"); });
  $$("[data-video-hint]").forEach((element) => { element.textContent = t("showreel.hint"); });
  const nav = $("#site-nav");
  nav?.setAttribute("aria-label", language === "fr" ? "Navigation principale" : "Main navigation");
  $$("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProjects();
  renderUpcomingProjects();
  updateVideoState($("#showreel [data-video-card]"));
  updateContact();
  if (typeof lightbox !== "undefined" && !lightbox.hidden) updateLightbox();
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createVideoPlaceholder(project, card, media) {
  const isShowreel = !project;
  const placeholder = createElement("div", `video-placeholder ${isShowreel ? "video-placeholder--showreel" : `video-placeholder--${project.accent}`}`);
  placeholder.dataset.videoPlaceholder = "";
  const thumbnail = isShowreel ? showreelThumbnail : card?.dataset.videoPoster;
  if (thumbnail) {
    placeholder.classList.add("has-thumbnail");
    placeholder.style.setProperty("--thumbnail", `url("${thumbnail}")`);
  }
  if (media?.ratio) placeholder.style.aspectRatio = media.ratio;
  if (media?.type === "local-video") {
    const preview = document.createElement("video");
    preview.className = "video-preview";
    preview.dataset.videoPreview = "";
    preview.muted = true;
    preview.playsInline = true;
    preview.preload = "metadata";
    preview.setAttribute("muted", "");
    preview.setAttribute("playsinline", "");
    preview.setAttribute("aria-hidden", "true");
    placeholder.append(preview);
    const status = createElement("span", "video-preview-status");
    status.dataset.videoPreviewStatus = "";
    placeholder.append(status);
  }
  if (isShowreel) {
    const label = createElement("span", "video-label");
    label.dataset.videoLabel = "";
    placeholder.append(label);
  }
  const button = createElement("button", "play-button");
  button.type = "button";
  button.dataset.playVideo = "";
  button.append(createElement("span", "", "▶"));
  placeholder.append(button);
  if (isShowreel) {
    const hint = createElement("span", "video-hint");
    hint.dataset.videoHint = "";
    placeholder.append(hint);
  }
  return placeholder;
}


function createProjectCard(project, index) {
  const card = createElement("article", `project-card reveal${index % 2 ? " reveal--delay" : ""}`);
  card.dataset.projectIndex = String(index);

  const info = createElement("div", "project-info");
  const infoText = createElement("div");

  infoText.append(
    createElement("p", "project-category"),
    createElement("h3", "", localized(project.title))
  );

  info.append(infoText);
  info.append(createElement("span", "project-status", t(`statuses.${project.status}`)));
  card.append(info);

  const gallery = createElement("div", "project-gallery");
  gallery.setAttribute("aria-label", t("projects.gallery"));

  const availableMedia = project.media.filter((media) => {
    if (media.type === "image") return Boolean(media.url);
    if (media.type === "local-video") return Boolean(media.src);
    if (media.type === "video") return Boolean(media.url && getYouTubeId(media.url));
    return false;
  });

  let imageIndex = 0;

  availableMedia.forEach((media) => {
    const item = createElement("div", `media-item media-item--${media.type}`);

    if (media.type === "local-video" || media.type === "video") {
      item.classList.add("video-card");
      item.dataset.videoCard = "";
      item.dataset.videoType = media.type;
      item.dataset.videoUrl = media.url || "";
      item.dataset.videoSrc = media.src || "";
      item.dataset.videoPoster = media.poster || media.thumbnail || "";
      item.dataset.videoRatio = media.ratio || "16 / 9";
      item.dataset.videoTitle = localized(media.title);
      item.dataset.projectIndex = String(index);
      item.dataset.projectMediaIndex = String(project.media.indexOf(media));

      item.append(createVideoPlaceholder(project, item, media));
      updateVideoState(item);

      if (media.type === "local-video") {
        setupLocalVideoPreview(item);
      }
    } else {
      const imageButton = createElement("button", "image-trigger");
      imageButton.type = "button";
      imageButton.dataset.lightboxImage = "";
      imageButton.dataset.projectIndex = String(index);
      imageButton.dataset.mediaIndex = String(imageIndex);

      imageButton.setAttribute(
        "aria-label",
        `${t("projects.openImage")}: ${localized(media.title)}`
      );

      const image = document.createElement("img");
      image.alt = localized(media.description);
      image.loading = "lazy";

      image.addEventListener("error", () => {
        media.url = "";
        renderProjects();
      }, { once: true });

      imageButton.append(image);
      image.src = media.url;
      item.append(imageButton);

      imageIndex += 1;
    }

    gallery.append(item);
  });

  if (!availableMedia.length) {
    const empty = createElement("p", "project-media-empty", t("projects.noMedia"));
    empty.setAttribute("role", "status");
    gallery.append(empty);
  }

  card.append(gallery);

  // Informations affichées sous la galerie
  const detail = createElement("div", "project-detail");

  detail.append(
    createElement("p", "project-description", localized(project.description)),
    createElement("strong", "project-role", localized(project.role))
  );

  card.append(detail);

  return card;
}



function createDetail(project, index) {
  const item = createElement("article", "detail-item reveal");
  item.append(createElement("span", "detail-index", `0${index + 1}`));

  const main = createElement("div", "detail-main");
  main.append(
    createElement("p", "detail-category"),
    createElement("h3", "", localized(project.title))
  );

  const description = createElement("div", "detail-description");
  description.append(
    createElement("p", "", localized(project.description)),
    createElement("span", "", "")
  );

  item.append(main, description);

  return item;
}



function renderProjects() {
  const grid = $("[data-project-grid]");
  if (!grid) return;

  pauseLocalVideos();
  grid.replaceChildren();

  featuredProjects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    grid.append(card);

    $(".project-category", card).textContent = localized(project.category);
    $(".project-description", card).textContent = localized(project.description);
    $(".project-role", card).textContent = localized(project.role);
    $(".project-status", card).textContent = t(`statuses.${project.status}`);
  });

  observeReveals();
}


function renderUpcomingProjects() {
  const details = $("[data-details-list]");
  if (!details) return;
  details.replaceChildren();
  upcomingProjects.forEach((project, index) => {
    details.append(createDetail(project, index));
    $(".detail-category", details.lastElementChild).textContent = localized(project.category);
    $(".detail-description p", details.lastElementChild).textContent = localized(project.description);
    $(".detail-description span", details.lastElementChild).textContent = t(`statuses.${project.status}`);
  });
}

function pauseLocalVideos() {
  $$("video").forEach((video) => video.pause());
}

function getYouTubeId(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1).split("/")[0];
    if (["youtube.com", "www.youtube.com", "m.youtube.com"].includes(parsed.hostname)) {
      if (parsed.pathname === "/watch") return parsed.searchParams.get("v") || "";
      const parts = parsed.pathname.split("/").filter(Boolean);
      return ["embed", "shorts", "live"].includes(parts[0]) ? parts[1] || "" : "";
    }
  } catch { return ""; }
  return "";
}

function updateVideoState(card) {
  if (!card || $("iframe", card)) return;
  const button = $("[data-play-video]", card);
  const project = card.dataset.projectIndex === undefined ? null : featuredProjects[Number(card.dataset.projectIndex)];
  const isLocalVideo = card.dataset.videoType === "local-video";
  const hasValidUrl = isLocalVideo ? Boolean(card.dataset.videoSrc) : Boolean(getYouTubeId(card.dataset.videoUrl));
  if (!project) card.dataset.videoTitle = t("showreel.iframeTitle");
  const placeholder = $("[data-video-placeholder]", card);
  if (placeholder && card.classList.contains("video-card--showreel") && showreelThumbnail) {
    placeholder.classList.add("has-thumbnail");
    placeholder.style.setProperty("--thumbnail", `url("${showreelThumbnail}")`);
    const thumbnailCheck = new Image();
    thumbnailCheck.onload = () => {};
    thumbnailCheck.onerror = () => {
      placeholder.classList.remove("has-thumbnail");
      placeholder.style.removeProperty("--thumbnail");
    };
    thumbnailCheck.src = showreelThumbnail;
  }

  const hint = $("[data-video-hint]", card);
  if (hint) hint.textContent = hasValidUrl ? (project ? t("projects.watch") : t("showreel.ready")) : (project ? t("projects.noVideo") : t("showreel.hint"));
  const label = $("[data-video-label]", card);
  if (label) label.textContent = project ? t(`statuses.${project.status}`) : (hasValidUrl ? t("showreel.ready") : t("showreel.empty"));
  if (button) {
    button.disabled = !hasValidUrl;
    button.setAttribute("aria-label", card.classList.contains("video-card--showreel") ? t("showreel.play") : `${t("projects.play")} ${card.dataset.videoTitle}`);
  }
  if (!hasValidUrl) {
    card.classList.add("video-not-configured");
    const status = $("[data-video-status]", card);
    if (status) status.textContent = isLocalVideo ? t("projects.noVideo") : (card.dataset.videoUrl ? t(project ? "projects.invalid" : "showreel.invalid") : (project ? "" : t("showreel.unavailable")));
  } else {
    card.classList.remove("video-not-configured");
    const status = $("[data-video-status]", card);
    if (status) status.textContent = "";
  }
}

function setupLocalVideoPreview(card) {
  const preview = $("[data-video-preview]", card);
  if (!preview || !card.dataset.videoSrc) return;
  preview.controls = false;
  preview.muted = true;
  preview.playsInline = true;
  preview.preload = "metadata";
  const placeholder = $("[data-video-placeholder]", card);
  const status = $("[data-video-preview-status]", card);
  preview.addEventListener("loadedmetadata", () => {
    if (preview.videoWidth && preview.videoHeight) {
      card.dataset.videoRatio = `${preview.videoWidth} / ${preview.videoHeight}`;
      if (placeholder) placeholder.style.aspectRatio = card.dataset.videoRatio;
      preview.currentTime = Math.min(0.01, preview.duration || 0);
    }
  }, { once: true });
  preview.addEventListener("seeked", () => {
    placeholder?.classList.add("preview-ready");
  }, { once: true });
  preview.addEventListener("error", () => {
    placeholder?.classList.add("preview-error");
    if (status) status.textContent = t("projects.previewError");
  }, { once: true });
  preview.src = card.dataset.videoSrc;
}

function closeVideo(card) {
  if (!card) return;
  const restore = card._videoRestore;
  if (!restore) return;
  card.replaceChildren(...[...restore.childNodes].map((node) => node.cloneNode(true)));
  card._videoRestore = null;
  updateVideoState(card);
  if (card.dataset.videoType === "local-video") setupLocalVideoPreview(card);
  $("[data-play-video]", card)?.focus();
}

function loadVideo(card) {
  if (card?.dataset.videoType === "local-video") {
    loadLocalVideo(card);
    return;
  }
  const videoId = getYouTubeId(card?.dataset.videoUrl);
  if (!card || !videoId) return;
  pauseLocalVideos();
  card._videoRestore = card.cloneNode(true);
  const wrapper = createElement("div", "video-frame");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
  iframe.title = card.dataset.videoTitle || "YouTube video";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  wrapper.append(iframe);
  const close = createElement("button", "video-close", `× ${card.classList.contains("video-card--showreel") ? t("showreel.close") : t("projects.close")}`);
  close.type = "button";
  close.dataset.closeVideo = "";
  wrapper.append(close);
  card.replaceChildren(wrapper);
  close.focus();
}

function loadLocalVideo(card) {
  if (!card?.dataset.videoSrc) return;
  pauseLocalVideos();
  card._videoRestore = card.cloneNode(true);
  const wrapper = createElement("div", "video-frame");
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.title = card.dataset.videoTitle;
  video.setAttribute("aria-label", card.dataset.videoTitle);
  video.style.aspectRatio = card.dataset.videoRatio || "16 / 9";
  video.addEventListener("play", () => {
    $$("video").forEach((otherVideo) => {
      if (otherVideo !== video) otherVideo.pause();
    });
  });
  video.addEventListener("error", () => {
    const project = featuredProjects[Number(card.dataset.projectIndex)];
    const media = project?.media[Number(card.dataset.projectMediaIndex)];
    if (media) media.src = "";
    renderProjects();
  }, { once: true });
  video.src = card.dataset.videoSrc;
  wrapper.append(video);
  const close = createElement("button", "video-close", `× ${t("projects.close")}`);
  close.type = "button";
  close.dataset.closeVideo = "";
  wrapper.append(close);
  card.replaceChildren(wrapper);
  close.focus();
  video.play().catch(() => {
    video.controls = true;
  });
}

const lightbox = createElement("div", "lightbox");
lightbox.hidden = true;
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.setAttribute("aria-labelledby", "lightbox-title");
const lightboxContent = createElement("div", "lightbox-content");
const lightboxTitle = createElement("h2", "sr-only", "");
lightboxTitle.id = "lightbox-title";
const lightboxImage = document.createElement("img");
const lightboxClose = createElement("button", "lightbox-close", "×");
const lightboxPrevious = createElement("button", "lightbox-nav lightbox-nav--previous", "‹");
const lightboxNext = createElement("button", "lightbox-nav lightbox-nav--next", "›");
lightboxClose.type = lightboxPrevious.type = lightboxNext.type = "button";
lightboxContent.append(lightboxTitle, lightboxImage, lightboxPrevious, lightboxNext, lightboxClose);
lightbox.append(lightboxContent);
document.body.append(lightbox);
let lightboxState = { projectIndex: 0, imageIndex: 0, trigger: null };

function openLightbox(projectIndex, imageIndex, trigger) {
  const images = featuredProjects[projectIndex].media.filter((media) => media.type === "image" && media.url);
  if (!images.length) return;
  pauseLocalVideos();
  lightboxState = { projectIndex, imageIndex, trigger };
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  updateLightbox();
  lightboxClose.focus();
}

function updateLightbox() {
  const images = featuredProjects[lightboxState.projectIndex].media.filter((media) => media.type === "image" && media.url);
  const media = images[lightboxState.imageIndex];
  if (!media) return;
  lightboxImage.src = media.url;
  lightboxImage.alt = localized(media.description);
  lightboxTitle.textContent = localized(media.title);
  lightboxClose.setAttribute("aria-label", t("projects.closeImage"));
  lightboxPrevious.setAttribute("aria-label", t("projects.previous"));
  lightboxNext.setAttribute("aria-label", t("projects.next"));
  lightboxPrevious.hidden = images.length < 2;
  lightboxNext.hidden = images.length < 2;
}

function closeLightbox() {
  pauseLocalVideos();
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.style.overflow = "";
  lightboxState.trigger?.focus();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrevious.addEventListener("click", () => {
  const count = featuredProjects[lightboxState.projectIndex].media.filter((media) => media.type === "image" && media.url).length;
  lightboxState.imageIndex = (lightboxState.imageIndex - 1 + count) % count;
  updateLightbox();
});
lightboxNext.addEventListener("click", () => {
  const count = featuredProjects[lightboxState.projectIndex].media.filter((media) => media.type === "image" && media.url).length;
  lightboxState.imageIndex = (lightboxState.imageIndex + 1) % count;
  updateLightbox();
});

const menuToggle = $(".menu-toggle");
const siteNav = $("#site-nav");
const navFocusable = $$("a, button", siteNav);
function closeMenu(restoreFocus = false) {
  siteNav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", t("menuOpen"));
  if (window.matchMedia("(max-width: 700px)").matches) {
    navFocusable.forEach((item) => item.setAttribute("tabindex", "-1"));
    if (siteNav) siteNav.inert = true;
  } else {
    navFocusable.forEach((item) => item.removeAttribute("tabindex"));
    if (siteNav) siteNav.inert = false;
  }
  document.body.style.overflow = "";
  if (restoreFocus) menuToggle?.focus();
}
function openMenu() {
  siteNav?.classList.add("is-open");
  if (siteNav) siteNav.inert = false;
  menuToggle?.setAttribute("aria-expanded", "true");
  menuToggle?.setAttribute("aria-label", t("menuClose"));
  navFocusable.forEach((item) => item.removeAttribute("tabindex"));
  navFocusable[0]?.focus();
  document.body.style.overflow = "hidden";
}
menuToggle?.addEventListener("click", () => menuToggle.getAttribute("aria-expanded") === "true" ? closeMenu(true) : openMenu());
$$("a", siteNav).forEach((link) => link.addEventListener("click", () => closeMenu(true)));
window.addEventListener("resize", () => closeMenu());
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (typeof lightbox !== "undefined" && !lightbox.hidden) closeLightbox();
    else closeMenu(true);
  }
  if (typeof lightbox !== "undefined" && !lightbox.hidden) {
    if (event.key === "ArrowLeft") lightboxPrevious.click();
    if (event.key === "ArrowRight") lightboxNext.click();
  }
});

document.addEventListener("click", (event) => {
  const playButton = event.target.closest("[data-play-video]");
  const closeButton = event.target.closest("[data-close-video]");
  const imageButton = event.target.closest("[data-lightbox-image]");
  if (playButton && !playButton.disabled) loadVideo(playButton.closest("[data-video-card]"));
  if (closeButton) closeVideo(closeButton.closest("[data-video-card]"));
  if (imageButton) openLightbox(Number(imageButton.dataset.projectIndex), Number(imageButton.dataset.mediaIndex), imageButton);
});

function observeReveals() {
  const elements = $$(".reveal:not(.is-visible)");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  elements.forEach((element) => observer.observe(element));
}

$$("[data-language]").forEach((button) => button.addEventListener("click", () => {
  language = button.dataset.language;
  applyTranslations();
  if (window.innerWidth <= 700) closeMenu(true);
}));

const form = $("#contact-form");
const feedback = $("[data-form-feedback]");
function updateContact() {
  const configured = Boolean(contactEmail.trim());
  const formElement = $("#contact-form");
  const unavailable = $("[data-contact-not-configured]");
  const link = $("[data-contact-link]");
  if (formElement) formElement.hidden = !configured;
  if (unavailable) unavailable.hidden = configured;
  if (link) {
    link.hidden = !configured;
    if (configured) {
      link.href = `mailto:${contactEmail}`;
      link.textContent = contactEmail;
      link.setAttribute("aria-label", `${t("contact.emailLabel")}: ${contactEmail}`);
    }
  }
}
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactEmail) {
    feedback.textContent = t("contact.noEmail");
    return;
  }
  feedback.textContent = t("contact.opening");
  const message = $("#contact-message").value.trim();
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Portfolio contact")}&body=${encodeURIComponent(message)}`;
});

const showreelCard = $("#showreel [data-video-card]");
if (showreelCard) showreelCard.dataset.videoUrl = showreelUrl;
closeMenu();
applyTranslations();
observeReveals();
const year = $("[data-year]");
if (year) year.textContent = new Date().getFullYear();
