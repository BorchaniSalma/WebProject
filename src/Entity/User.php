<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository", repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"email"},message="This mail is used sorry ! ")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $LastName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Email
     */
    private $email;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */

    private $createdAt;

    /**
     * @ORM\ManyToMany(targetEntity=Comment::class, mappedBy="user")
     */
    private $comments;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(min="8", minMessage="Password Minimum 8 Characters Long")
     * @Assert\EqualTo(propertyPath="confirm_password")
     */
    private $password;
    /**
     * @Assert\EqualTo(propertyPath="password")
     */
    public $confirm_password;

    public function getUsername(){
        return $this->getEmail();
    }
    public function eraseCredentials(){
        
    }

    public function getSalt(){
        
    }
    /**
    * Returns the roles granted to the user.
    * 
    * @return Role[] The user roles
    */
    public function getRoles()
{
        return array('ROLE_USER');
}
    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->Name;
    }

    public function setName(string $Name)
    {
        $this->Name = $Name;

        return $this;
    }

    public function getLastName()
    {
        return $this->LastName;
    }

    public function setLastName(string $LastName)
    {
        $this->LastName = $LastName;

        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail(string $email)
    {
        $this->email = $email;

        return $this;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function setCreatedAt($createdAt): User
    {
        $this->createdAt = $createdAt;

        return $this;
    }
    /**
     * @return Collection|Comment[]
     */
    public function getComments()
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): User
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->addUser($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): User
    {
        if ($this->comments->removeElement($comment)) {
            $comment->removeUser($this);
        }

        return $this;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword(string $password)
    {
        $this->password = $password;

        return $this;
    }

}
