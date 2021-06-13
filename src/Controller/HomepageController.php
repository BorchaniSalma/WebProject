<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
/*use http\Env\Request;*/
use phpDocumentor\Reflection\DocBlock\Tags\Uses;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder;
use Symfony\Component\Security\Core\User\UserInterface;

 ;

/**
 *  @Route("/Home",name="homepageMainRoute")
 */
class HomepageController extends AbstractController
{
    /**
     * @Route("/",name = "homepage")
     */
    public function index()
    {
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    /**
     * @Route("/signUp/",name="creation de compte")
     */
    public function signUp(EntityManagerInterface $manager, Request $request,Encoder $encoder){
        $newUser=new User();
        $form=$this->createForm(UserType::class,$newUser);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()){
            $hash=$encoder->encodePassword($newUser,$newUser->getPassword());
            $newUser->setPassword($hash);
            $manager->persist($newUser);
            $manager->flush();
        }


   /* if ($request->request->count()>0){
        $newUser=new User();
        $newUser->setName($request->request->get('Name'));

    }*/
        return $this->render('homepage/signUp.html.twig', [
            'user'=>$newUser,
            'form'=>$form->createView()

        ]);
    }

}
