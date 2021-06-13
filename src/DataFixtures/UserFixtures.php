<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        for ($i=0 ; $i<=10;$i++){
            $user=new user();
            $user->setName("userName$i");
            $user->setLastName("LastName$i");
            $user->setEmail("userName$i@gmail.com");
            $password = $this->encoder->encodePassword($user, 'insat');
            $user->setPassword($password);
            $user->setCreatedAt(new \DateTime());
            $manager->persist($user);

        }


        $manager->flush();
    }
}
