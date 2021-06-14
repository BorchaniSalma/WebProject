<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
/*use http\Env\Request;*/

use phpDocumentor\Reflection\Types\This;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

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
    public function signUp(EntityManagerInterface $manager ,Request $request )
    {
    $user=new User();
    $form=$this->createForm(UserType::class,$user);
    $form->handleRequest($request);
    if($form->isSubmitted()){
        $user->setCreatedAt(new \DateTime());
        $manager->persist($user);
        $manager->flush();

        return $this->render('homepage/index.html.twig', [
            'name'=>$user->getName()

        ]);
    }

    return $this->render('homepage/signUp.html.twig' ,[
    'form'=>$form->createView()

        ]);
    }
}
