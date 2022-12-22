import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import creerCompagnieTransport from '../components/administrateur_societe/CreerCompagnieTransport'
import modifierCompagnieTransport from '../components/administrateur_societe/ModifierCompagnieTransport'
import selectionnerCompagnieTransport from '../components/administrateur_societe/SelectionnerCompagnieTransport'
import selectionnerDemandeAdhesionCompagnie from '../components/administrateur_societe/SelectionnerDemandeAdhesionCompagnie'

import creerPays from '../components/administrateur_societe/CreerPays'
import selectionnerPays from '../components/administrateur_societe/SelectionnerPays'
import creerVille from '../components/administrateur_societe/CreerVille'
import selectionnerVille from '../components/administrateur_societe/SelectionnerVille'

import connexion from '../components/authentification/ConnexionUtilisateur.vue'
import inscription from '../components/authentification/InscriptionUtilisateur.vue'

import creerOffreVoyage from '../components/administration_compagnie_transport/CreerOffreVoyage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/creerCompagnieTransport',
    name: 'creerCompagnieTransport',
    component: creerCompagnieTransport
  },
  { 
    path:'/modifierCompagnieTransport',
    name:'modifierCompagnieTransport',
    component:modifierCompagnieTransport
  },
  {
    path: '/selectionnerCompagnieTransport',
    name: 'selectionnerCompagnieTransport',
    component: selectionnerCompagnieTransport
  },
  {
    path: '/selectionnerDemandeAdhesionCompagnie',
    name: 'selectionnerDemandeAdhesionCompagnie',
    component: selectionnerDemandeAdhesionCompagnie
  },
  {
    path: '/creerPays',
    name: 'creerPays',
    component: creerPays
  },
  {
    path: '/creerVille',
    name: 'creerVille',
    component: creerVille
  },
  {
    path: '/selectionnerPays',
    name: 'selectionnerPays',
    component: selectionnerPays
  },
  {
    path: '/selectionnerVille',
    name: 'selectionnerVille',
    component: selectionnerVille
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: connexion
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: inscription
  },
  {
    path: '/creerOffreVoyage',
    name: 'creerOffreVoyage',
    component: creerOffreVoyage
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
