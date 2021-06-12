<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 *  @Route("/Home",name="homepageMainRoute")
 */
class HomepageController extends AbstractController
{
    /**
     * @Route("/",name = "homepage")
     */
    public function index(): Response
    {
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    /**
     * @Route("/sign up/",name="creation de compte")
     */
    public function signUp(){
        return $this->render('homepage/signUp.html.twig', [

        ]);
    }
}
