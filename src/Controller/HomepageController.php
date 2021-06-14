<?php
namespace App\Entity;
namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;





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
     * @Route("/signUp/",name="creation")
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
